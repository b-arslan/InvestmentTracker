'use client'
import { useState } from 'react';  
import styles from '../styles/authform.module.css';
import { useRouter } from 'next/navigation';

function AuthForm({ title, btnLabel, formType }) {
    const [email, setEmail] = useState(''); 
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [password, setPassword] = useState(''); 
    const [isValidPasswordLength, setIsValidPasswordLength] = useState(true); 
    const router = useRouter();

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        if (value) {
            setIsValidPasswordLength(value.length >= 8 && value.length <= 16);
        } else {
            setIsValidPasswordLength(true);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = formType === 'login' ? 'http://localhost:3003/login' : 'http://localhost:3003/register';

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (formType === 'login' && data.token) {
            localStorage.setItem("authToken", data.token);
            router.push('/portfolio');
        } else if (formType === 'register' && data.success) {
            router.push('/portfolio');
        } else {
            alert(data.message);
        }
    }

    const goBack = () => {
        router.push('/');
    }

    return (  
        <form onSubmit={handleSubmit} className={styles.main2}>
            <div>
                <button onClick={goBack} className={styles.goBackButton}>Back</button>
                <h1 className={styles.title}>{title}</h1>
            </div>

            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <label className={styles.text}>E-Mail</label>
                    <input 
                        className={styles.formInputMail} 
                        type='email'
                        value={email}
                        onChange={handleEmailChange}
                        required 
                    />
                </div>
                
                <div className={styles.formContainer}>
                    <label className={styles.text}>Password</label>
                    <div className={styles.inputWithIcon}>
                        <input 
                            className={`${styles.formInput} ${styles.inputPassword} ${!isValidPasswordLength ? styles.invalidInput : ''}`} 
                            type={isPasswordVisible ? 'text' : 'password'} 
                            maxLength={16}
                            minLength={8}
                            value={password}
                            onChange={handlePasswordChange}
                            required 
                        />
                        <span onClick={togglePasswordVisibility}>
                            {isPasswordVisible ? '👁️' : '🙈'}
                        </span>
                    </div>
                    {!isValidPasswordLength && <p className={styles.errorText}>Password must be 8-16 characters</p>}
                </div>
            </div>

            <div>
                <button type="submit" className={styles.btn}>{btnLabel}</button>
            </div>
        </form>
    );
}

export default AuthForm;

'use client'
import { useState } from 'react';  
import styles from '../styles/authform.module.css'
import { useRouter } from 'next/navigation'

function AuthForm({ title, btnLabel }) {
    
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [password, setPassword] = useState(''); 
    const [isValidPasswordLength, setIsValidPasswordLength] = useState(true); 
    const router = useRouter();

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
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
    
    const goBack = () => {
        router.push('/'); // Kullanıcıyı bir önceki sayfaya yönlendirir
    }

    return (  
        <section className={styles.main2}>
            <div>
                <button onClick={goBack} className={styles.goBackButton}>Geri</button> {/* Geri butonu */}
                <h1 className={styles.title}>{title}</h1>
            </div>

            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <label className={styles.text}>E-Mail</label>
                    <input className={styles.formInputMail} type='email' />
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
                <button className={styles.btn}>{btnLabel}</button>
            </div>
        </section>
    );
}

export default AuthForm;

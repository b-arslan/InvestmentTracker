import AuthForm from "../components/AuthForm"
import styles from '../styles/authform.module.css'


function SignUp() {
    return (  
        <section className={styles.main}>
            <AuthForm title={'Sign Up'} btnLabel={'Sign Up'} formType={'register'}/>
        </section>
    );
}

export default SignUp;
import AuthForm from "../components/AuthForm"
import styles from '../styles/authform.module.css'


function SignIn() {
    return (  
        <section className={styles.main}>
            <AuthForm title={'Sign In'} btnLabel={'Sign In'} formType={'login'}/>
        </section>
    );
}

export default SignIn;
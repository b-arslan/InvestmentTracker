import React from "react";
import styles from "../styles/signin.module.css"


function SignIn() {
    return (  
        <div className={styles.main}>
           
            <div className={styles.container}>

                <div className={styles.title}>
                    <h1>Sign In</h1>
                </div>

                <div className={styles.formContainer}>

                    <form className={styles.form}>
                        <React.Fragment>

                            <label className={styles.text}>Username</label>
                            <input className={styles.data} type="text" name="username" placeholder="Username" />

                        </React.Fragment>
                        <React.Fragment>

                            <label className={styles.text}>Password</label>
                            <input className={styles.data} type="password" name="password" placeholder="Password" />

                        </React.Fragment>
                        <button className={styles.btn}>Sign In</button>
                    </form>

                </div>

            </div>
            
        </div>
    );
}

export default SignIn;
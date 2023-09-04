'use client'

import Image from 'next/image';
import styles from './styles/page.module.css'
import investmentImg from '../../public/investment.jpg'
import { useRouter } from 'next/navigation'

function Home() {

    const router = useRouter();

    const routeSignin = () => {
        router.push('/signin')
    }

    const routeSignup = () => {
        router.push('/signup')
    }

    return (  
        <section className={styles.main}>

            <header className={styles.pageHeader}>
                
                <div className={styles.pageTitle}>
                    <h1>Investment Tracking</h1>
                </div>

                <div className={styles.btnContainer}>
                    <button className={styles.btnTransparent} onClick={routeSignup}>Sign Up</button>
                    <button className={styles.btn} onClick={routeSignin}>Sign In</button>
                </div>
                
            </header>

            <div className={styles.content}>

                <div className={styles.pageContentImg}>
                    <Image src={investmentImg} className={styles.investmentImg}/>
                </div>

                <div className={styles.pageContentText}>
                    <p>
                        Experience the ease and efficiency of our user-friendly Investment Tracking application, allowing you to effortlessly monitor your portfolio and track your earnings with real-time data. We have designed it to simplify your journey towards achieving your financial goals.
                    </p>
                    <br />
                    <p> To get started, click on the "Sign Up" button and take your first step towards financial success. Don't delay any longer; start shaping your future today!</p>
                </div>

            </div>

        </section>
    );
}

export default Home;
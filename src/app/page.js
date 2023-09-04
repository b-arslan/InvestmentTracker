import Image from 'next/image';
import styles from './styles/page.module.css'
import investmentImg from '../../public/investment.jpg'

function Home() {
    return (  
        <section>

            <header className={styles.pageHeader}>
                
                <div className={styles.pageTitle}>
                    <h1>Investment Tracking</h1>
                </div>
                <div className={styles.btnContainer}>
                    <button>Home</button>
                    <button>Portfolio</button>
                    <button>Get the Code</button>
                </div>
                
            </header>

            <section className={styles.content}>

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

            </section>

        </section>
    );
}

export default Home;
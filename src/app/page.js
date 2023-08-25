import styles from './styles/page.module.css'

export default function Home() {
    return (
        
        <div className={styles.main}>

            <div className={styles.container}>

                <div className={styles.header}>

                    <h1 className={styles.title}>Investment Tracking App</h1>

                </div>

                <div className={styles.currency}>

                    <p className={styles.text}>Please Select Currency</p>

                    <select className={styles.data}>
                        <option>Select currency</option>
                        <option></option>
                    </select>
                    

                    <p className={styles.text}>Please Type Amount</p>

                    <input placeholder='Amount Here' className={styles.data} type='number' min={0} />

                </div>
                
            </div>

        </div>

    )
}

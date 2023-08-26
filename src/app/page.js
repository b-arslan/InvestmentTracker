'use client'

import styles from './styles/page.module.css'
import { fetchCurrencies } from './api/api'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home(props) {

    const [currencies, setCurrencies] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState("");
    const [amount, setAmount] = useState(0);

    const router = useRouter();
    
    const handleClick = async (e) => {

        router.push('/portfolio');

    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const filteredData = await fetchCurrencies();
            setCurrencies(filteredData);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
    }, []);



    return (
        
        <div className={styles.main}>

            <div className={styles.container}>

                <div className={styles.header}>

                    <h1 className={styles.title}>Investment Tracking App</h1>

                </div>

                <div className={styles.currency}>
                    <div className={styles.textContainer}>

                        <p className={styles.text}>Please Select Currency</p>

                        <select className={styles.data} value={selectedCurrency} onChange={(e) => {setSelectedCurrency(e.target.value)}}>
                            <option>Select currency</option>
                            {currencies.map((currencyItem) => (

                                <option key={currencyItem.symbol} value={currencyItem.symbol}>{currencyItem.symbol}</option>
                            ))}
                        </select>

                    </div>
                    
                    <div className={styles.textContainer}>

                        <p className={styles.text}>Please Type Amount</p>

                        <input placeholder='Amount Here' className={styles.data} type='number' min={0} onChange={(e) => setAmount(e.target.value)} />

                    </div>

                </div>

                <div>

                    <button className={styles.btn} onClick={handleClick}>
                        Add Currency
                    </button>

                </div>
                
            </div>

        </div>

    )
}

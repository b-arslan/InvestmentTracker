'use client'
import React from 'react'
import styles from './styles/page.module.css'
import { fetchCurrencies } from './api/currencies'
import { sendRecord } from './api/records'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'


export default function Home() {

    const [currencies, setCurrencies] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState("");
    const [amount, setAmount] = useState(0)

    const router = useRouter();
    
    const handleClick = (e) => {
        sendRecord(amount, selectedCurrency);
        e.preventDefault();
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
        <section className={styles.container}>

            <section className={styles.main}>

                <React.Fragment className={styles.container}>

                    <h1 className={styles.title}>Investment Tracking App</h1>                

                    <p className={styles.text}>Please Select Currency</p>

                    <select className={styles.data} value={selectedCurrency} onChange={(e) => {setSelectedCurrency(e.target.value)}}>
                        <option>Select currency</option>
                        {currencies.map((currencyItem) => (

                            <option key={currencyItem.symbol} value={currencyItem.symbol}>{currencyItem.symbol}</option>
                        ))}
                    </select>
    

                    <p className={styles.text}>Please Type Amount</p>

                    <input placeholder='Amount Here' className={styles.data} type='number' min={0} onChange={(e) => setAmount(e.target.value)} />
                
                

                    <button className={styles.btn} onClick={handleClick}>
                        Add Currency
                    </button>
                    
                </React.Fragment>

            </section>
        </section>

    )
}

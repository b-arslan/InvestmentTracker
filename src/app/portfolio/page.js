'use client'
import React from 'react'
import styles from '../styles/portfolio.module.css'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Modal from '../components/Modal'
import { fetchCurrencies } from '../api/currencies'

function Portfolio() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currencies, setCurrencies] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState("");
    const [amount, setAmount] = useState(0)
    const [records, setRecords] = useState([]);

    const amountRef = useRef(null);

    const router = useRouter();

    const handleBackClick = () => {
        setIsModalOpen(true);
    };

    const confirmBack = () => {
        router.push('/');
    };

    const cancelBack = () => {
        setIsModalOpen(false);
    };

    const clearInputs = () => {
        setSelectedCurrency("");
        if(amountRef.current) {
            amountRef.current.value = "";
        }
    };

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
        <section className={styles.main}>
            <section className={styles.upperSection}>
                <button className={styles.backBtn} onClick={handleBackClick}>Log Out</button>
                <Modal 
                    isOpen={isModalOpen} 
                    onConfirm={confirmBack} 
                    onCancel={cancelBack}
                />
                <section className={styles.container}>

                    <div className={styles.secondContainer}>

                        <label>Select Currency</label>
                        <select className={styles.data} value={selectedCurrency} onChange={(e) => {setSelectedCurrency(e.target.value)}}>
                            <option>Select Currency</option>
                            {currencies.map((currencyItem) => (

                                <option key={currencyItem.symbol} value={currencyItem.symbol}>{currencyItem.symbol}</option>
                            ))}
                        </select>

                    </div>
                    
                    <div className={styles.secondContainer}>

                        <label>Amount</label>
                        <input placeholder='Amount Here' className={styles.amount} type='number' min={0} ref={amountRef} onChange={(e) => setAmount(e.target.value)} />
                    </div>

                    <div className={styles.btnContainer}>
                        <button className={styles.myBtn}>Add</button>
                        <button className={styles.myBtnClear} onClick={clearInputs}>Clear</button>
                    </div>
                    
                </section>
        
            </section>

            <section className={styles.lowerSection}>

                

                <div className={styles.headerContainer}>
                    <header className={styles.header}>Portfolio</header>
                </div>

                <div className={styles.container2}>

                    <table className={styles.customTable}>
                        <thead>
                            <tr>
                                <th className={styles.idColumn}>ID</th>
                                <th className={styles.currencyColumn}>Currency</th>
                                <th className={styles.amountColumn}>Amount</th>
                                <th className={styles.priceColumn}>Price</th>
                                <th className={styles.totalPriceColumn}>Total Price</th>
                                <th className={styles.actionColumn}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.map((record) => (
                                <tr key={record.id}>
                                    <td className={styles.idColumn}>{record.id}</td>
                                    <td className={styles.currencyColumn}>{record.currency}</td>
                                    <td className={styles.amountColumn}>{record.amount}</td>
                                    <td className={styles.priceColumn}>{record.price}</td>
                                    <td className={styles.totalPriceColumn}>{record.amount * record.price}</td>
                                    <td className={styles.actionColumn}>
                                        <button className={styles.btn}>Edit</button>
                                        <button className={styles.btn}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                        
                </div>

                

            </section>
        </section>
    );
}

export default Portfolio;
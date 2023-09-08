'use client'
import React from 'react'
import styles from '../styles/util.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Modal from '../components/Modal'

function specs() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currencies, setCurrencies] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState("");
    const [amount, setAmount] = useState(0)
    const [records, setRecords] = useState([]);

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
                            <option>Select currency</option>
                            {currencies.map((currencyItem) => (

                                <option key={currencyItem.symbol} value={currencyItem.symbol}>{currencyItem.symbol}</option>
                            ))}
                        </select>

                    </div>
                    
                    <div className={styles.secondContainer}>

                        <label>Amount</label>
                        <input placeholder='Amount Here' className={styles.amount} type='number' min={0} onChange={(e) => setAmount(e.target.value)} />
                    </div>

                    <div className={styles.btnContainer}>
                        <button className={styles.myBtn}>Add</button>
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
                                <th>ID</th>
                                <th>Currency</th>
                                <th>Amount</th>
                                <th>Price</th>
                                <th>Total Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.map((record) => (
                                <tr key={record.id}>
                                    <td>{record.id}</td>
                                    <td>{record.currency}</td>
                                    <td>{record.amount}</td>
                                    <td>{record.price}</td>
                                    <td>{record.amount * record.price}</td>
                                    <td className={styles.btnTab}>
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

export default specs;
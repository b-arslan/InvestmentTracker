'use client'
import React from 'react'
import styles from '../styles/portfolio.module.css'
import { fetchRecords } from '../api/records'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Portfolio() {

    const router = useRouter();

    const [records, setRecords] = useState([]);
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const filteredData = await fetchRecords();
            setRecords(filteredData);
          } catch (error) {
            console.error(error);
          }
        };

        const fetchBinance = async () => {
            try {
                const filteredData = await fetchCurrencies();
                setCurrencies(filteredData);
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchBinance();
        fetchData();
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        router.push('/');
    }

    /* {records.map((e) => (<h1>{e.amount} - {e.id} - {e.currency}</h1>))} */

    return (
        <div className={styles.main}>

            <div className={styles.headerContainer}>
                <header className={styles.header}>My Portfolio</header>
            </div>

            <div className={styles.container}>

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

            <div>
                <button className={styles.goBack} onClick={handleClick}>
                    Back to Home
                </button>
            </div>

        </div>
    );
}
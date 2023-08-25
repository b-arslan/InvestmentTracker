import styles from './styles/page.module.css'
import { fetchCurrencies } from './api/api'
import { useState } from 'react';

export default function Home({amount, selectedCurrency}) {

    const [currencies, setCurrencies] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState("");
    const [amount, setAmount] = useState(0);


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

                    <p className={styles.text}>Please Select Currency</p>

                    <select className={styles.data} value={selectedCurrency} onChange={(e) => {setSelectedCurrency(e.target.value)}}>
                        <option>Select currency</option>
                        {currencies.map((currencyItem) => (

                            <option key={currencyItem.symbol} value={currencyItem.symbol}>{currencyItem.symbol}</option>
                        ))}
                    </select>
                    

                    <p className={styles.text}>Please Type Amount</p>

                    <input placeholder='Amount Here' className={styles.data} type='number' min={0} onChange={(e) => setAmount(e.target.value)} />

                </div>
                
            </div>

        </div>

    )
}

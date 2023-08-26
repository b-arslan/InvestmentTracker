/*
import styles from '../styles/portfolio.module.css'

function Portfolio(props) {

    const { amount, selectedCurrency } = props;

    return (  
        
        <div>
            <p>{amount}</p>
            <p>{selectedCurrency}</p>
        </div>

    );
}

export default Portfolio;*/

import React from 'react'
import styles from '../styles/portfolio.module.css'
import TableComponent from '../components/TableComponent' // Tablo bileşeninin yolunu düzgün şekilde belirtmelisiniz

const data = [
  {
    name: 'John',
    age: 25,
    city: 'New York',
  },
  {
    name: 'Jane',
    age: 30,
    city: 'Los Angeles',
  },
  // ... Diğer veriler
];

const columns = [
  {
    Header: 'Currency',
    accessor: 'currency',
  },
  {
    Header: 'Amount',
    accessor: 'amount',
  },
  {
    Header: 'Price',
    accessor: 'price',
  },
  {
    Header: 'Total',
    accessor: 'total',
  },
];

function Portfolio() {
    return (
        
        <div className={styles.main}>

            <div className={styles.container}>

                <TableComponent data={data} columns={columns} />

            </div>

        </div>
    
    );
}

export default Portfolio;

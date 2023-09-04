import React from "react"
import styles from "../styles/header.module.css"

function Header() {
    return (  
        <header className={styles.main}>
            <div className={styles.title}>
                <h1>Investment Tracking</h1>
            </div>
            <div className={styles.btnContainer}>
                <button>Home</button>
                <button>Portfolio</button>
                <button>Get the Code</button>
            </div>
        </header>
    );
}

export default Header;
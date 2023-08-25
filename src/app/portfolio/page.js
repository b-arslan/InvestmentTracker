
import styles from '../styles/portfolio.module.css'

function Portfolio({amount, selectedCurrency}) {
    return (  
        
        <div>
            <p>{amount}</p>
            <p>{selectedCurrency}</p>
        </div>

    );
}

export default Portfolio;
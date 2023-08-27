const BASE_URL = "http://localhost:3002";

// Function to fetch the list of symbols from the API
export async function fetchCurrencies() {
    try {
        const response = await fetch(`${BASE_URL}/currencies`);
        const data = await response.json();
        
        // Filter only symbols ending with "USDT"
        const filteredData = data
        .filter(item => item.symbol.endsWith('USDT'))
        .map(item => ({
            ...item,
            symbol: formatCurrencySymbol(item.symbol) // Convert symbols by formatting them
        }));
        
        return filteredData;
    } catch (error) {
        console.error("Error fetching the currencies:", error);
        throw error;
    }
}

// Function to convert a symbol to the specified format
function formatCurrencySymbol(symbol) {
    // Extract the last 4 characters and the characters before them
    const lastFourChars = symbol.slice(-4);
    const symbolPart = symbol.slice(0, -4);
    
    // Return the symbol in the new format
    return `${symbolPart}-${lastFourChars}`;
}

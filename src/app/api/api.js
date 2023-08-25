const BASE_URL = "http://localhost:3001";

export async function fetchCurrencies() {
  try {
    const response = await fetch(`${BASE_URL}/currencies`);
    const data = await response.json();
    const filteredData = data.filter(item => item.symbol.endsWith('USDT'));
    return filteredData;
  } catch (error) {
    console.error("Error fetching the currencies:", error);
    throw error;
  }
}

const BASE_URL = "http://localhost:3003";

// Function to fetch the list of symbols from the API
export async function fetchRecords() {
    try {
        const response = await fetch(`${BASE_URL}/records`);
        const data = await response.json();        
        return data;
    } catch (error) {
        console.error("Error fetching the currencies:", error);
        throw error;
    }
}

// Function to send data to the API using HTTP POST
export async function sendRecord(amount, currency) {
    try {
        // Get the current number of records from the API
        const records = await fetch(`${BASE_URL}/records`);
        const recordsData = await records.json();
        const newId = recordsData.length + 1; // Calculate the new ID

        const recordData = {
            id: newId,
            amount: amount,
            currency: currency
        };

        const response = await fetch(`${BASE_URL}/records`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recordData)
        });

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Error sending the record:", error);
        throw error;
    }
}


// Function to update a record using HTTP PUT
export async function updateRecord(id, amount, currency) {
    try {
        const response = await fetch(`${BASE_URL}/records/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ amount, currency }) // Update only name and age
        });

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Error updating the record:", error);
        throw error;
    }
}

// Function to delete a record using HTTP DELETE
export async function deleteRecord(id) {
    try {
        const response = await fetch(`${BASE_URL}/records/${id}`, {
            method: "DELETE"
        });

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Error deleting the record:", error);
        throw error;
    }
}
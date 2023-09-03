import axios from "axios";

const baseURL = "https://books-backend.p.goit.global/books/";

export async function fetchBooksData (data) {

  const additionalData = data;
    try {
        const response = await axios.get(baseURL+additionalData);
        return response.data;

    } catch(error) {

      console.error("An error occurred while fetching data:", error);
    }
   

}
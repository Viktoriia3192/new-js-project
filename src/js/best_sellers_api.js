import axios from "axios";

const baseURL = "https://books-backend.p.goit.global/books/top-books";
export async function fetchBooksData () {

    try {

        const response = await axios.get(baseURL);
        
        return response.data;
    } catch(error) {

      throw  error;
    }
   

}
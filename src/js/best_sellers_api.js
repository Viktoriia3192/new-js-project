import axios from "axios";

const baseURL = "https://books-backend.p.goit.global/books/top-books";
export async function fetchBooksData () {

  console.log("get api");
    try {
    
        const response = await axios.get(baseURL);
        console.log("succsess");
        return response.data;

    } catch(error) {

      console.error("An error occurred while fetching data:", error);
    }
   

}
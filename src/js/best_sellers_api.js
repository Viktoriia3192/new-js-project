import axios from 'axios';

const baseURL = 'https://books-backend.p.goit.global/books/';
const URL_CATEGORY = 'https://books-backend.p.goit.global/books/category-list';

export async function fetchBooksData(data) {
  const additionalData = data;
  try {
    const response = await axios.get(baseURL + additionalData);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data:', error);
  }
}

export async function getCategories() {
  const { data } = await axios.get(URL_CATEGORY);
  return data;
}

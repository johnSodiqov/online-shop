import axios from 'axios';

export const baseUrl1 = "https://64b36dec38e74e386d560f98.mockapi.io/product-data"

const client = axios.create({
    baseUrl1,
})

export default client
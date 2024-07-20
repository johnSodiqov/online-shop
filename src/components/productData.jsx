import FetchData from "../Fetch/fetch"
import { baseUrl1 } from "../Fetch/fetch.jsx"

class ProductData {
    async getData() {
        let product = FetchData.get(baseUrl1)
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error)
            })

        return product
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductData()
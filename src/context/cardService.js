import axios from "axios";

export  const getProducts = () => {
    return axios.get('https://elredtest.s3.amazonaws.com/reactAssignment/getCategories.json')
}

export const getsubProducts = (id) => {
    return axios.get(`https://elredtest.s3.amazonaws.com/reactAssignment/getSubCategory_${id}.json`)
}

export const getProductsBySubId = (id) => {
return axios.get(`https://elredtest.s3.amazonaws.com/reactAssignment/getProduct_${id}.json`)
}
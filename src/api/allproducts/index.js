import axios from "axios";

export const fetchAllProducts = async () => {
    try {
        const { data } = await axios.get(
            `https://dummyjson.com/products`
        );
        return { success: true, data };
    } catch (err) {
        return { success: false, message: err.message };
    }
};
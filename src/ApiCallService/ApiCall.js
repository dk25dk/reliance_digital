
import axios from "axios";


export const fetchData = async () => {
    const url = "https://academics.newtonschool.co/api/v1/ecommerce/electronics/products";
    const projectId = "0io9zoi91tt1";

    try {
        const response = await axios.get(url, {
            headers: {
                projectId: projectId
            },
        });
        if (!response) throw new Error('No data  found');
        return response;


    } catch (err) {
        console.log("Error: " + err);
    }
};

export const fetchLowestPriceData = async () => {
    const url = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?sort={"price":-1}`
    const projectId = "0io9zoi91tt";

    try {
        const response = await axios.get(url, {
            headers: {
                projectId: projectId
            },
        });
        if (!response) throw new Error('No data  found');
        return response;


    } catch (err) {
        console.log("Error: " + err);
    }
};

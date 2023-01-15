import axios from "axios";


const params = {
    headers:{
         Authorization: "bearer " + import.meta.env.VITE_STRAPI_API,
    }
}

export const fetchDataFromApi = async (url) => {
    try{
        const {data} = await axios.get(import.meta.env.VITE_STRAPI_URL + url, params )
        console.log(data)
        return data
    }catch (err){
        console.log(err)
        return err
    }
}
import axios from "axios";


const STRAPI_API ="0d32b3ca2b25e257a2bc087653cf5ca8e30e6548a344437806bce2554ebd9254f1eb21ef4239a5fd52d390484d79260e6ba5d5b8f4901a96826f6498df0478d859389bf02821f2469b65cbe81ae15ccd87761feba96a3d5a6dc28c1e85871f4bb79f720bcbf7281368d2e66913fa1bc1e680e337b2e2181b2f9092b06cc454a0"
const STRAPI_URL="http://localhost:1337"


const params = {
    headers:{
         Authorization: "bearer " + STRAPI_API,
    }
}

export const fetchDataFromApi = async (url) => {
    try{
        const {data} = await axios.get(STRAPI_URL + url, params )
        console.log(data)
        return data
    }catch (err){
        console.log(err)
        return err
    }
}
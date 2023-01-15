import React from 'react'
import { fetchDataFromApi } from '../utils/api'
import ProductCard from './ProductCard'
import { useEffect, useState } from 'react'
import styled from 'styled-components'


function ProductCatalog() {

  const [products,setProducts] = useState('')
  const [loading, setLoading] = useState(true)
  
  console.log(import.meta.env.VITE_KEY)

   

  useEffect(()=>{
    getProducts()
  },[])

  const getProducts= async() => {
    const api = await fetchDataFromApi("/api/products?populate=*")
    console.log(api)
    setProducts(api.data)
    console.log('productsss', products)
    setLoading(false)
  }

  return (
    <>
     <Countainer>
        <Title>Products </Title>
         <ProductList>
        { loading == false && products.map((item)=>(
          <ProductCard key={item.id} id={item.id} data={item.attributes} />

        ))}
      </ProductList>
      </Countainer>
    </>
  )
}

const Countainer = styled.div`
width:100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
  }
`

const ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-top: 50px;
  
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
  }
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  &:after {
    content: "";
    display: block;
    margin-top: 2px;
    width: 50px;
    height: 4px;
    background-color: #00bbf9;
}
`

export default ProductCatalog
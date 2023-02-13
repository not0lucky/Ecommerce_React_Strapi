import React from 'react'
import styled from 'styled-components'
import { fetchDataFromApi } from '../utils/api'
import { useEffect, useState } from 'react'

function Hero() {
  const [product,setProduct] = useState('')
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    getProduct()
  },[])

  const getProduct= async() => {
    const api = await fetchDataFromApi("/api/products/4?populate=*")
    console.log(api)
    setProduct(api.data)
    console.log('productsss', product)
    setLoading(false)
  }

  return (
    <>
    {loading == false?
  
    <Countainer>
      
      <Left>
        <Title>Featured Product</Title>
        <Content>
          <p>{product.attributes.Title}</p>
          <Price>${product.attributes.Price}</Price>
          <CheckBut>Buy Now</CheckBut>
        </Content>
      </Left>
      <Right>
        <img src={product.attributes.Picture.data.attributes.url}/>
        
      </Right>
    </Countainer>
  : null}
  </>
  )
}

const Countainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.05);
  margin-bottom: 100px;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  @media (max-width: 1200px) {
    height: 100%;
    
    //flex-wrap: wrap;
    //align-items: center;
    //justify-content: center;
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 30px 80px;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  @media (max-width: 1200px) {
    height: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Title = styled.p`
  font-size: 44px;
  font-weight: 700;

`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 90%;

  @media (max-width: 768px) {
    width: 70%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    gap: 10px;
  }

  p{
    font-weight: 600;
    font-size: 29px;
    margin-bottom: 70px;

    @media (max-width: 768px) {
    margin-bottom: 40px;
  }
  }
 
`

const Price = styled.h2`
  font-size: 27px;
  margin-bottom: 10px;
`

const CheckBut = styled.button`
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 20px;
  background-color: white;
  border: 3px solid #0dafe6;
  color:#0dafe6 ;
  padding: 20px 20px;
  width: 240px;
  transition: all ease 0.3s;

  &:hover{
    color: white;
    background-color: #0dafe6;
  }
`

const Right = styled.div`
  width: 50%;
  padding: 30px 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    height: 400px;
    width: 400px;
    
  }
`

export default Hero
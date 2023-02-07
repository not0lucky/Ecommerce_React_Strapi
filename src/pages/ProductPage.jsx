import React, {useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import {fetchDataFromApi} from '../utils/api'
import { useDispatch } from 'react-redux'
import { add } from '../store/cart'

function ProductPage() {

  const {id} = useParams()
  const [product,setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const [title,setTitle] = useState('')
  const [price,setPrice] = useState('')
  const [img, setImg] = useState('')
  
  let Pro
  const dispatch = useDispatch()

  useEffect(()=>{
    getProduct()
    
  },[])

  const getProduct= async() => {
    const api = await fetchDataFromApi(`/api/products?populate=*&[filters][id]=${id}`)
    console.log('product',api)
    setProduct(api)
    setLoading(false)
    Pro = api.data[0]
   setTitle(Pro.attributes.Title)
    setPrice(Pro.attributes.Price)
    setImg(Pro.attributes.Picture.data.attributes.url)
    console.log('print title', Pro.attributes.Title)
  }

 
  
  return (
    <>{loading ==false ?
    <Layout>
        <Countainer>
          <Left>

            { <img src={product.data[0].attributes.Picture.data.attributes.url}/> }
          </Left>
          <Right>
            <Title>{product.data[0].attributes.Title}</Title>
            <Desc>{product.data[0].attributes.Description}</Desc>
            
            <SecCountainer>
              <Price>${product.data[0].attributes.Price}</Price>  
              <CartBut onClick={()=>{dispatch(add({title,img,price,id}))}}>Add To Cart</CartBut>
            </SecCountainer>
          </Right>
        </Countainer>
    </Layout>
        : null}
    </>
  )
}

const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Countainer = styled.div`
  display: flex;
  width: 1200px;
  margin:100px 0;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 40px;
    
  }
`

const Left = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  height: 550px;
  width: 550px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 350px;
    height: 350px;
    margin-bottom: 50px;
  }

  img{
    width: 80%;
    display: block;
  
  }
`

const Right = styled.div`
  position: relative;
  width: 550px;
  display: flex;
  flex-direction: column;
  //align-items: center;


  @media (max-width: 768px) {
    width: 350px;
    
  }
`

const Title = styled.h1`
  &:after {
    content: "";
    display: block;
    margin-top: 2px;
    width: 25%;
    height: 4px;
    background-color: #0dafe6;
}
  
  font-size: 45px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size:35px;
    margin-bottom: 30px;
  }
`
const Desc = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom:80px;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 70px;
  }
`
const SecCountainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  
`

const Price = styled.h2`
  font-size: 30px;
  margin-bottom: 14px;
`

const CartBut = styled.button`
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


export default ProductPage
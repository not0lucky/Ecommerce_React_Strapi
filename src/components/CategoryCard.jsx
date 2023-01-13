import React,{ useEffect, useState, useContext } from 'react'
import { Context } from '../utils/context'
import styled from 'styled-components'

function CategoryCard({title,image}) {
        const STRAPI_URL="http://localhost:1337"
        const [category,setCategory] = useState(Context)
       // const [productList, setProductList] = useState(Context)

        const FilterCategory = (title) => {
            setCategory(title)
            console.log('category selected: ', category)     
   }

  return (
    <>
        <Countainer onClick={()=> FilterCategory(title)}>
            
            <Img src={STRAPI_URL + image}/>
          
         
        </Countainer>
    </>
  )
}

const Countainer = styled.div`
    border-radius: 10px;
    overflow: hidden;  
    display: inline-block;
    width: 300px;
    height: 130px;

    &:hover{
        cursor: pointer;
    }
    
`
const Img = styled.img`
    border-radius: 10px;
    width:100%;
    height: 100%;
    display: block;
    transition: transform .4s;

    &:hover{
        
        transform: scale(1.2);
        transform-origin: 50% 50%;
    }

`


export default CategoryCard
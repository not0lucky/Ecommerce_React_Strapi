import React,{ useEffect, useState, useContext } from 'react'
import { fetchDataFromApi } from '../utils/api'
import CategoryCard from './CategoryCard'
import styled from 'styled-components'

function CategoriesList() {

    const [categories,setCategories] = useState('')
    const [loading, setLoading] = useState(true)

    const params = "/api/categories?populate=*"

  useEffect(()=>{
    getCategories()
  },[])

  const getCategories= async() => {
    const api = await fetchDataFromApi(params)
    console.log(api)
    setCategories(api.data)
    setLoading(false)
  }


  

  return (
    <>
    <Countainer>
    
        <Title>Categories</Title>
        <Categories>
        { loading == false? categories.map((item)=>(
            <CategoryCard key={item.attributes.title} title={item.attributes.title} image={item.attributes.image.data.attributes.url} />
        )): null}
        </Categories>
    </Countainer>
    </>
  )
}

const Categories = styled.div`

    margin-top: 40px;
    margin-bottom: 80px;
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
    
`
const Countainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
    width: 100%;
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


export default CategoriesList
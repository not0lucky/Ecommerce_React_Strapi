import React from 'react'
import { CategoriesList,ProductCatalog, Hero } from '../components'
import styled from 'styled-components'

function HomePage() {



  return (
    <>
    <Layout>
      <Hero/>
      <CategoriesList  />
      <ProductCatalog/>
    </Layout>
      
    </>
  )
}


const Layout = styled.div`
  max-width: 1200px;
  margin: 80px auto;

  @media (max-width: 768px) {
    width: 100%;

  }
  @media (max-width: 1100px) {
    width: 90%;
  }
`

export default HomePage
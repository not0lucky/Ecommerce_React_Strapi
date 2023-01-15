import React from 'react'
import { CategoriesList,ProductCatalog } from '../components'
import styled from 'styled-components'

function HomePage() {



  return (
    <>
    <Layout>
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
`

export default HomePage
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function ProductCard({id,dis}) {
  const navigate = useNavigate()

  //console.log('dataaa',dis.Picture.data.id)
  //const img = dis.Picture.data.attributes.url

  return (
    <>
    { dis &&
    <ProdCard onClick={()=>navigate("/product/"+id)}>
    <Thumbnail>
         <ThumbnailImg src={dis.Picture.data.attributes.url}/> 
    </Thumbnail>
    <ProdDetail>
      <Title>{dis.Title}</Title>
      <Price>${dis.Price}</Price>
    </ProdDetail>

    </ProdCard>}
    </>
  )
}

const ProdCard = styled.div`
  cursor: pointer;
  width: 270px;
  margin-bottom: 20px;
  

  @media (max-width: 768px) {
    width: 60%;
    margin-right: 40px;
  }
`

const Thumbnail = styled.div`
  width: 100%;
  height: 320px;
  background-color: rgba(0, 0, 0, 0.05);
  margin-bottom: 10px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`
const ThumbnailImg = styled.img`
  transition: all ease 0.3s;
  display: block;
  width: 80%;

  &:hover{
    transform: scale(1.2);
  }
`
const ProdDetail = styled.div`
  
`
const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 16px;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
const Price = styled.h1`
  font-size: 24px;
`

export default ProductCard
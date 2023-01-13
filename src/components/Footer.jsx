import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <>
    <Countainer>
      <P>This Project was made Anir Agram. Check out my <Link href='https://github.com/not0lucky' target="_blank">Github Page</Link>.</P>
    </Countainer>
      
    </>
  )
}

const Countainer = styled.div`
  position: absolute;
  margin-bottom: 0;
  width: 100%;
  height: 200px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 170px;
    text-align: center;
    font-size: 13px;
  }
`

const P = styled.p`
  color: white;
  @media (max-width: 768px) {
    width: 70%;
    
  }
`

const Link = styled.a`
  color: #00bbf9;
`


export default Footer
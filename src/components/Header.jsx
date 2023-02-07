import React,{useContext} from 'react'
import styled from 'styled-components'
import {FaShoppingCart} from 'react-icons/fa'
import { Context } from "../utils/context";
import CartModal from './CartModal';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {
  const style = { fontSize: "1.5em" }
  const {   showCart, setShowCart } = useContext(Context);
  const count = useSelector((state)=> state.cart.cartItems.length)
  const navigate = useNavigate()

  return (
    <>
      <Countainer>
      <Inside>
        <div onClick={()=>navigate("/")}>
          <Title>Store</Title>
        </div>
        
        <CartIcon>
          <FaShoppingCart style={style} onClick={() => setShowCart(true)}/>
          {count ?<span>{count}</span> : null}
        </CartIcon>
        
      </Inside>
      </Countainer>
      {showCart ? <CartModal/> : null}
    </>
  )
}

const Countainer = styled.div`
background-color: #f8f9fa;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 10px 5px 0px rgba(226,228,230,1);

  @media (max-width: 768px) {
    width: 100%;
    
  }

  
`

const Inside = styled.div`
  align-items: center;
  display: flex;
  justify-content:space-between;
  width: 1200px;

  @media (max-width: 768px) {
    width: 85%;
    
  }

  @media (max-width: 1200px) {
    width: 90%;
  }
`
const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
  span {
      min-width: 20px;
      text-align: center;
      background: #8e2de2;
      padding: 2.5px;
      position: absolute;
      top: -5px;
      right: -12px;
      font-size: 12px;
      line-height: 1;
      border-radius: 10px;
  }
`
const Title = styled.h1`
  cursor: pointer;
  font-weight: 700;
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 33px;
  }
`

export default Header
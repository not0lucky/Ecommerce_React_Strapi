import React,{useState, useEffect, useContext} from 'react'
import CartItem from './CartItem';
import styled,{keyframes} from 'styled-components'
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from '../utils/context'
import { useSelector } from 'react-redux'



function CartModal() {
    const style = { fontSize: "1.5em" }
    const style1 = {fontSize:"120px", opacity:"0.1"}
    const { setShowCart,cartSubTotal  } = useContext(Context);
    
    const cartItems = useSelector((state)=> state.cart.cartItems)
    const totalPrice = useSelector((state)=> state.cart.totalPrice)

    console.log(' cart items',  cartItems.length)
    console.log(' subtotal ',  totalPrice)
    
    

  return (
    <>
        <Countainer>
            <Layer onClick={()=>setShowCart(false)}>
            </Layer>
            <CartContent>
                <CartHeader>
                    <Title>Shopping Cart</Title>
                    <CloseModal>
                        <p className='text'>Close</p>
                         <MdClose style={style} onClick={()=> setShowCart(false)}/>    
                    </CloseModal>
                </CartHeader>

                {!cartItems && (
                    <EmptyCart>
                        <BsCartX style={style1} />
                        <span>No products in the cart.</span>
                        <button className="return-cta" onClick={()=> setShowCart(false)}>
                            RETURN TO SHOP
                        </button>
                    </EmptyCart>
                )}

                {cartItems.length > 0 ? (
                    <CartFooter>
                        <CartItem />
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">Total:</span>
                                <span className="text total">
                                    ${totalPrice}
                                </span>
                            </div>
                            <div className="button">
                                <button className="checkout-cta">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </CartFooter>
                ): null}

            </CartContent>
        </Countainer>
    </>
  )
}

const Countainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    display: flex;
    justify-content: flex-end;
`
const Layer = styled.div`
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`
const slideCartWindow = keyframes`
     0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0%);
    }
`

const CartContent = styled.div`
    width: 350px;
    height: 100%;
    background: white;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    transform: translateX(100%);
    animation: ${slideCartWindow} 0.5s ease forwards;
`
const CartHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 20px 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`
const Title = styled.h1`
    flex-grow: 1;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
`
const CloseModal = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;

    .text {
        text-transform: uppercase;
        font-size: 14px;
    }

    &:hover {
        opacity: 0.5;
    }
`

const EmptyCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 100px;
    .return-cta {
        outline: 0;
        border: 0;
        height: 40px;
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 13px;
        color: white;
        background: #8e2de2;
        border-bottom: 3px solid #6516aa;
        svg {
            margin-right: 10px;
        }
    }
`

const CartFooter = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    .subtotal {
        padding: 20px 15px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: space-between;
        .text {
            margin-bottom: 0;
            font-size: 20px;
            font-weight: 700;
            text-transform: uppercase;
            &.total {
                color: #8e2de2;
            }
        }
    }
    .button {
        padding: 20px 15px;
        .checkout-cta {
            outline: 0;
            border: 0;
            height: 50px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 16px;
            color: white;
            background: #8e2de2;
            border-bottom: 3px solid #6516aa;
            text-transform: uppercase;
            svg {
                margin-right: 10px;
            }
        }
    }
`

export default CartModal
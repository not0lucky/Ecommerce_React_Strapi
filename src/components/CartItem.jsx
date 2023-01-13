import React, {useContext} from 'react'
import { Context } from '../utils/context'
import { MdClose } from "react-icons/md";
import styled from 'styled-components'
import { useSelector,useDispatch } from 'react-redux'
import {clear,del} from '../store/cart';

function CartItem() {

    const {  handleRemoveFromCart, handleCartProductQuantity } = useContext(Context);
    const STRAPI_URL="http://localhost:1337"
    const dispatch = useDispatch()
    const cartItems = useSelector((state)=> state.cart.cartItems)

    console.log('cart item type', typeof cartItems)

  return (
    <>
        <CartProducts>
            {cartItems?.map((item) => (
                <div
                    className="search-result-item"
                    key={item.id}
                    onClick={() => {}}
                >
                    <div className="image-container">
                        <img
                            src={
                               item.img
                            }
                        />
                    </div>
                    <div className="prod-details">
                        <span className="name">{item.title}</span>
                        <MdClose
                            className="close-btn"
                            onClick={() => (dispatch(del(item.id)))}
                        />
                        
                        <div className="text">
                           
                            
                            <span className="highlight">
                                <span>$</span>
                                {item.price}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </CartProducts>
    </>
  )
}

const CartProducts = styled.div`
    flex-grow: 1;
    .search-result-item {
        padding: 20px 15px;
        display: flex;
        gap: 10px;
        .image-container {
            background-color: rgba(0, 0, 0, 0.05);
            width: 60px;
            height: 60px;
            flex-shrink: 0;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .prod-details {
            overflow: hidden;
            position: relative;
            .name {
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                font-size: 16px;
                line-height: 1;
                margin-bottom: 10px;
                font-weight: 600;
                display: block;
                padding-right: 25px;
            }
            .text {
                display: flex;
                align-items: center;
                gap: 5px;
                font-size: 12px;
                font-weight: 600;
                .highlight {
                    color: #8e2de2;
                }
            }
            svg {
                position: absolute;
                top: 0;
                right: 0;
                cursor: pointer;
            }
            .quantity-buttons {
                width: fit-content;
                display: flex;
                border: 1px solid rgba(0, 0, 0, 0.1);
                height: 30px;
                margin-bottom: 8px;
                span {
                    font-size: 14px;
                    width: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    color: #6b6b6b;
                    &:nth-child(1) {
                        font-size: 18px;
                        border-right: 1px solid rgba(0, 0, 0, 0.1);
                    }
                    &:nth-child(2) {
                        width: 40px;
                    }
                    &:nth-child(3) {
                        font-size: 18px;
                        border-left: 1px solid rgba(0, 0, 0, 0.1);
                    }
                }
            }
        }
        &:hover {
            background-color: rgba(0, 0, 0, 0.05);
        }
    }
`

export default CartItem
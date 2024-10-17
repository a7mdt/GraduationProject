import React, { useContext } from "react";
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {

    const { currency, delivery_fee,getCartAmount} = useContext(ShopContext);

    return (
        <div className="w-full">
            <div className="text-2xl">
                <Title text1={'CART'} text2={'TOTALS'} />
            </div> 

            <div className="flex flex-col gap-2 mt-2 text-sm">
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>{currency} {getCartAmount()}.00</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Shipping fee</p>
                    <p>{currency} {delivery_fee}.00</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <b>Total</b>
                    <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
                </div>
            </div>
        </div>
    )
}

export default CartTotal

// made by yomna
// we start this page at (4:04:04) & left (3:58:47)
// we back at (4:07:59) & left (4:12:27)
// we back at (4:14:54) & left (4:15:42)
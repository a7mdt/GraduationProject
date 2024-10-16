//uncomment it work but not its time--------------------------------------------------------
// import {useContext, useEffect} from "react"
// import {ShopContext} from '../context/ShopContext'
import Title from '../components/Title'

const Cart = () => {


//uncomment it work but not its time--------------------------------------------------------
  // const{products, currency, cartItems}= useContext(ShopContext);

  // const [cartData,setCartData]=useContext([]);

  // useEffect(()=>{
    
  //   const tempData=[];
  //   for(const items in cartItems){
  //     for(const item in cartItems[items]){
  //       if(cartItems[items][item]>0){
  //         tempData.push({
  //           _id: items,
  //           size: item,
  //           quantity:cartItems[items][item]
  //         })
  //       }
  //     }
  //   }
  //   setCartData(tempData);
  // },[cartItems])

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
      <Title text1="YOUR" text2="CART" />
      </div>
      </div>
  )
}

export default Cart
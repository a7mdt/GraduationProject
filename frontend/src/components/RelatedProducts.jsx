// import { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import ProductItem from "./ProductItem";


// const RelatedProducts= ({category, subCategory}) => {

//     const{ products} = useContext(ShopContext);
//     const[related,setRelated] =useState([]);

//     useEffect(()=>{

//         if(products.length > 0){
//             let productsCopy = products.slice();

//             productsCopy = productsCopy.filter((item) => category === item.category);
//             productsCopy = productsCopy.filter((item) => subCategory === item.subCategory)

//             setRelated(productsCopy.slice(0,5));
            
//         }
//     },[products])
//     return(
//         <div className='my-24'>
//             <div className='text-center text-3xl py-2'>
//                 <Title text1={'Related'} text2={'Products'}/>

//             </div>

//             <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pag-y-6'>
//                 {related.map((item,index)=>(
//                     <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
//                 ))}

//             </div>

//         </div>
//     )
// }

// export default RelatedProducts

import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
            setRelated(productsCopy.slice(0, 5));
        }
    }, [products, category, subCategory]); // Added dependencies

    const handleProductClick = (id) => {
        navigate(`/product/${id}`); // Navigate to the product page
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'Related'} text2={'Products'} />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pag-y-6'>
                {related.map((item, index) => (
                    <div key={index} onClick={() => handleProductClick(item._id)}> {/* Wrap ProductItem in a div */}
                        <ProductItem 
                            id={item._id} 
                            name={item.name} 
                            price={item.price} 
                            image={item.image} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;

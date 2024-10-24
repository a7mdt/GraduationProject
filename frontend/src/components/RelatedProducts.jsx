import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory, currentProductId }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (products.length > 0) {
            // Create a new array of related products, excluding the current product and limiting to 5
            const filteredProducts = products.filter(item => 
                item.category === category && 
                item.subCategory === subCategory &&
                item._id !== currentProductId // Exclude the current product
            );

            // Ensure we have a maximum of 5 related products
            setRelated(filteredProducts.slice(0, 5));
        }
    }, [products, category, subCategory, currentProductId]); // Include currentProductId as a dependency

    const handleProductClick = (id) => {
        navigate(`/product/${id}`); // Navigate to the product page
        window.scrollTo(0, 0); // Scroll to the top of the page

        // Remove clicked product and update related products
        setRelated(prevRelated => {
            const updatedRelated = prevRelated.filter(item => item._id !== id);
            // Get a new product if the related list is less than 5
            if (updatedRelated.length < 5) {
                const newProducts = products.filter(item =>
                    item.category === category && 
                    item.subCategory === subCategory &&
                    !updatedRelated.some(relatedItem => relatedItem._id === item._id) &&
                    item._id !== currentProductId // Exclude the current product
                );
                // Add a new product to the list
                return [...updatedRelated, ...newProducts.slice(0, 5 - updatedRelated.length)];
            }
            return updatedRelated;
        });
    };

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'Related'} text2={'Products'} />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pag-y-6'>
                {related.map((item, index) => (
                    <div key={index} onClick={() => handleProductClick(item._id)}>
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

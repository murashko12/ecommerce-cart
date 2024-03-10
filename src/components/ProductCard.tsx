import React from 'react'
import  Product  from '../types/Product'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'
import { IoCartSharp } from "react-icons/io5";
import toast from 'react-hot-toast'


interface ProductCardProps {
    product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    
    const dispatch = useDispatch()

    const onAddToCart = (product: Product) => {
        dispatch(addToCart(product))
        toast.success("Added to cart")
    }

    return (
        <div className="flex hover:shadow-lg transition-all ease-in duration-150 basis-1/4 flex-1 flex-col border-2 border-slate-500 px-3 py-2 rounded-md">
            <div className="flex flex-col items-center">
                <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-[225px] h-[225px] object-contain"
                />
                <div className="my-5">
                    <h3 className="text-center font-bold">{product.title}</h3>
                    <h3 className="text-center mt-3 font-medium">{product.price}</h3>
                </div>
            </div>
            <div className="flex justify-end items-end">
                <button 
                    onClick={() => onAddToCart(product)}
                    title="Add to Cart"
                    className="bg-orange-500 p-3 text-white rounded-full" 
                >
                    <IoCartSharp/>
                </button>
            </div>
        </div>
    )
}

export default ProductCard

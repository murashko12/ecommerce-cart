import React from 'react'
import CartProduct from '../types/CartProduct'
import { useDispatch } from 'react-redux'
import { 
    increaseQuantity, 
    decreaseQuantity,
    removeItem
} from '../redux/slices/cartSlice'

interface CartItemsCardProps {
    product: CartProduct
}


const CartItemsCard: React.FC<CartItemsCardProps> = ({product}) => {
    const dispatch = useDispatch()

    const onIncreaseQuantity = (productId: number) => {
        dispatch(increaseQuantity({id: productId}))
    }

    const onDecreaseQuantity = (productId: number) => {
        dispatch(decreaseQuantity({id: productId}))
    }

    const onRemoveItem = (productId: number) => {
        dispatch(removeItem({ id: productId }))
    }

    return (
        <div className="flex hover:shadow-lg transition-all ease-in duration-150 basis-1/3 flex-1 flex-col border-2 border-slate-500 px-3 py-2 rounded-md">
            <div className="flex flex-col items-center">
                <img
                    className="w-[225px] h-[225px] object-contain" 
                    src={product.image} 
                    alt={product.title} 
                />
                <div className="my-5">
                    <h3 className="text-center font-bold">{product.title}</h3>
                    <h3 className="text-center mt-3 font-medium">
                        {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD"
                        }).format(product.price)}
                    </h3>
                    <h3 className="text-center mt-3 font-medium">
                        Quantity: {product.quantity}
                    </h3>
                </div>
            </div>

            <div className="flex justify-center items-center gap-5 mb-2">
                <button
                    className="bg-orange-500 p-2 text-white rounded-full"
                    onClick={() => onIncreaseQuantity(product.id)}
                >
                    +
                </button>
                <button
                    className="bg-orange-500 p-2 text-white rounded-full"
                    onClick={() => onDecreaseQuantity(product.id)}
                >
                    -
                </button>
                <button
                    className="bg-orange-500 p-2 text-white rounded-full"
                    onClick={() => onRemoveItem(product.id)}
                >
                    X
                </button>
            </div>
        </div>
    )
}

export default CartItemsCard

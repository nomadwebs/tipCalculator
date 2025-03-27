import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type orderContentsProp = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void //Función que no retorna nada
}

export default function OrderContents({ order, removeItem }: orderContentsProp) {
    return (
        <div>
            <h2 className="text-4xl font-black">Your order</h2>

            <div className="space-y-3 mt-10">
                {order.length === 0 ?
                    <p className="text-center">Order is empty</p> :
                    (
                        order.map(item => (
                            <div key={item.id}
                                className="flex justify-between border-t items-center border-gray-200 py-5 last-of-type:border-b">
                                <div>
                                    <p className="text-lg">
                                        {item.name} - {formatCurrency(item.price)}
                                    </p>
                                    <p className="font-black">
                                        Quantity: {item.quantity} - {formatCurrency(item.quantity * item.price)}
                                    </p>
                                </div>
                                <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black hover:cursor-pointer"
                                    onClick={() => removeItem(item.id)}>
                                    X
                                </button>
                            </div>
                        ))
                    )
                }
            </div>
        </div>

    )
}

import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]) //Generic

    const addItem = (item: MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id) //To check if the item exists in the actual order

        if (itemExist) {
            //We need to find which item of the order will increase quantity
            const updateOrder = order.map(orderItemtoFind => orderItemtoFind.id === item.id ?
                { ...orderItemtoFind, quantity: orderItemtoFind.quantity + 1 } : orderItemtoFind
            )
            setOrder(updateOrder)

        } else {
            const newItem: OrderItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    return {
        order,
        addItem,
        removeItem
    }
}
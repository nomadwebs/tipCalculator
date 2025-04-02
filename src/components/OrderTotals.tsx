import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"
import { useMemo } from "react"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {
    // Calcula el subtotal del pedido (precio * cantidad por ítem) y memoriza el resultado.
    // Solo se recalcula si el array 'order' cambia, mejorando el rendimiento.
    const subtotalAmount = useMemo(() =>
        order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])

    const taxAmount = useMemo(() => subtotalAmount * 0.1, [tip, order])

    const paymentTotalAmount = useMemo(() => subtotalAmount + tipAmount + taxAmount, [tip, order])

    return (
        <div>
            <>
                <div className='space-y-3'>
                    <h2 className='font-black text-2xl'>Totals & Tips</h2>
                    <p>Subtotal: {''}
                        <span className='font-bold'>{formatCurrency(subtotalAmount)}</span>
                    </p>

                    <p>Tip: {''}
                        <span className='font-bold'>{formatCurrency(tipAmount)}</span>
                    </p>

                    <p>Tax 10%: {''}
                        <span className='font-bold'>{formatCurrency(taxAmount)}</span>
                    </p>

                    <p>Payment Total: {''}
                        <span className='font-bold text-2xl'>{formatCurrency(paymentTotalAmount)}</span>
                    </p>
                </div>
                <button
                    className="w-full bg-teal-900 p-3 uppercase text-white font-bold mt-10 cursor-pointer hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-10"
                    disabled={paymentTotalAmount === 0}
                    onClick={placeOrder}
                >
                    Save Order
                </button>
            </>
        </div>
    )
}

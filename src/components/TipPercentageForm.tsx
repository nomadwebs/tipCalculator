import { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
        id: 'tip-0',
        value: 0,
        label: '0%'
    },
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPercentageFormProps = {
    //setTip: React.Dispatch<React.SetStateAction<number>>
    setTip: Dispatch<SetStateAction<number>>, //Los importo arriba
    tip: number
}

export default function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl">Tip:</h3>

            <form action="">
                {tipOptions.map(tipActual => (
                    <div key={tipActual.id} className="flex gap-2">
                        <label htmlFor={tipActual.id}>{tipActual.label}</label>
                        <input
                            type="radio"
                            id={tipActual.id}
                            name="tip"
                            value={tipActual.value}
                            onChange={e => setTip(+e.target.value)}
                            checked={tipActual.value === tip} //Lo usamos para validar si hay que limpiar las opciones de tips
                            /* el setTip de arriba lee un string, pero como esperamos un number, le ponemos el simbolo + para convertirlo a numero */ />
                    </div>
                ))}
            </form>

        </div>
    )
}

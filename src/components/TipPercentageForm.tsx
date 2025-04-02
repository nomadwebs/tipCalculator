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
    setTip: Dispatch<SetStateAction<number>> //Los importo arriba
}

export default function TipPercentageForm({ setTip }: TipPercentageFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl">Tip:</h3>

            <form action="">
                {tipOptions.map(tip => (
                    <div key={tip.id} className="flex gap-2">
                        <label htmlFor={tip.id}>{tip.label}</label>
                        <input
                            type="radio"
                            id={tip.id}
                            name="tip"
                            value={tip.value}
                            onChange={e => setTip(+e.target.value)}
                            /* el setTip de arriba lee un string, pero como esperamos un number, le ponemos el simbolo + para convertirlo a numero */ />
                    </div>
                ))}
            </form>

        </div>
    )
}

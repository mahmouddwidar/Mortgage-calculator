import type { ChangeEvent } from "react"

interface RangeProps {
    label: string;
    name: string;
    min?: number;
    max?: number;
    value: number;
    onChange: (name: string, value: number) => void;
}

export default function Range({ label, name, min = 0, max = 1000000000, value, onChange }: RangeProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(name, Number(e.target.value));
    };

    const formatValue = (value: number, name: string) => {
        const formattedNumber = value.toLocaleString();

        switch (name) {
            case 'purchasePrice':
            case 'downPayment':
                return `$${formattedNumber}`;
            case 'repaymentTime':
                return `${formattedNumber} years`;
            case 'interestRate':
                return `${formattedNumber}%`;
            default:
                return formattedNumber;
        }
    }

    return (
        <label className="flex flex-col gap-2">
            <div className="flex justify-start items-center">
                <span className="text-sm font-medium">{label}&#8194;</span>
                <span className="text-lg font-bold">{formatValue(value, name)}</span>
            </div>
            <input
                type="range"
                name={name}
                value={value}
                min={min}
                max={max}
                onChange={handleChange}
                className="w-full accent-secondary"
            />
        </label>
    )
}

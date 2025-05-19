interface SummaryItemProps {
    label: string;
    value: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
}

export default function SummaryItem({
    label,
    value,
    prefix = '$',
    suffix = '',
    decimals = 0
}: SummaryItemProps) {
    const formatValue = () => {
        const formattedNumber = decimals > 0
            ? value.toFixed(decimals)
            : value.toLocaleString();
        return `${prefix}${formattedNumber}${suffix}`;
    };

    return (
        <p className="flex flex-col justify-between items-start text-sm font-medium">
            {label}
            <span className="text-2xl font-bold mt-2">
                {formatValue()}
            </span>
        </p>
    );
} 
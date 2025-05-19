import Range from "./Range";
import SummaryItem from "./SummaryItem";
import { useReducer } from "react"

export default function Calculator() {
    interface MortgageState {
        purchasePrice: number;
        downPayment: number;
        repaymentTime: number;
        interestRate: number;
        loanAmount: number;
        monthlyPayment: number;
    }

    type MortgageAction = {
        type: 'UPDATE_VALUE';
        name: keyof MortgageState;
        value: number;
    };

    const calculateMonthlyPayment = (principal: number, annualRate: number, years: number) => {
        if (annualRate === 0) return 0;

        const monthlyRate = annualRate / 100 / 12;
        const numberOfPayments = years * 12;

        const monthlyPayment = principal *
            (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

        return monthlyPayment;
    };

    function mortgageReducer(state: MortgageState, action: MortgageAction): MortgageState {
        switch (action.type) {
            case 'UPDATE_VALUE': {
                const newState = { ...state, [action.name]: action.value };

                // Recalculate loan amount and monthly payment whenever relevant values change
                if (['purchasePrice', 'downPayment'].includes(action.name)) {
                    newState.loanAmount = newState.purchasePrice - newState.downPayment;
                }

                if (['purchasePrice', 'downPayment', 'interestRate', 'repaymentTime'].includes(action.name)) {
                    newState.monthlyPayment = calculateMonthlyPayment(
                        newState.loanAmount,
                        newState.interestRate,
                        newState.repaymentTime
                    );
                }

                return newState;
            }
            default:
                return state;
        }
    }

    const initialState: MortgageState = {
        purchasePrice: 0,
        downPayment: 0,
        repaymentTime: 30,
        interestRate: 0,
        loanAmount: 0,
        monthlyPayment: 0
    };

    const [state, dispatch] = useReducer(mortgageReducer, initialState);

    const handleRangeChange = (name: string, value: number) => {
        dispatch({ type: 'UPDATE_VALUE', name: name as keyof MortgageState, value });
    };

    return (
        <form className="bg-main xl:min-w-[1178px] dark:bg-gray-900 rounded-2xl dark:text-white py-34 px-16 outline-16 outline-white dark:outline-main grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8">
            <Range
                name="purchasePrice"
                value={state.purchasePrice}
                label="Purchase Price: "
                max={1000000}
                onChange={handleRangeChange}
            />
            <Range
                name="downPayment"
                value={state.downPayment}
                label="Down Payment: "
                max={state.purchasePrice}
                onChange={handleRangeChange}
            />
            <Range
                name="repaymentTime"
                value={state.repaymentTime}
                label="Repayment Time: "
                max={30}
                min={1}
                onChange={handleRangeChange}
            />
            <Range
                name="interestRate"
                value={state.interestRate}
                label="Interest Rate: "
                max={20}
                min={0}
                onChange={handleRangeChange}
            />

            <SummaryItem
                label="Loan Amount"
                value={state.loanAmount}
            />

            <div className="flex flex-col justify-between items-start text-sm font-medium">
                <div className="flex items-center gap-2">
                    <span>Estimated Monthly Payment</span>
                    {state.interestRate === 0 && (
                        <span className="text-yellow-500 text-xs">(Please set an interest rate)</span>
                    )}
                </div>
                <span className="text-2xl font-bold mt-2">
                    {state.interestRate === 0 ? (
                        <span className="text-gray-500">-</span>
                    ) : (
                        `$${state.monthlyPayment.toFixed(2)}`
                    )}
                </span>
            </div>
        </form>
    );
}

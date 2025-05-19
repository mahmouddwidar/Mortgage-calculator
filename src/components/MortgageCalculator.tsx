// import { useReducer } from 'react';
// import Range from './Range';

// // Define the shape of our state
// interface MortgageState {
//     purchasePrice: number;
//     downPayment: number;
//     interestRate: number;
//     loanTerm: number;
// }

// // Define the possible actions
// type MortgageAction = {
//     type: 'UPDATE_VALUE';
//     name: keyof MortgageState;
//     value: number;
// };

// // Initial state
// const initialState: MortgageState = {
//     purchasePrice: 0,
//     downPayment: 0,
//     interestRate: 0,
//     loanTerm: 30,
// };

// // Reducer function
// function mortgageReducer(state: MortgageState, action: MortgageAction): MortgageState {
//     switch (action.type) {
//         case 'UPDATE_VALUE':
//             return {
//                 ...state,
//                 [action.name]: action.value,
//             };
//         default:
//             return state;
//     }
// }

// export default function MortgageCalculator() {
//     const [state, dispatch] = useReducer(mortgageReducer, initialState);

//     const handleRangeChange = (name: string, value: number) => {
//         dispatch({
//             type: 'UPDATE_VALUE',
//             name: name as keyof MortgageState,
//             value,
//         });
//     };

//     // Calculate loan amount
//     const loanAmount = state.purchasePrice - state.downPayment;

//     return (
//         <div className="space-y-6 p-4">
//             <Range
//                 label="Purchase Price"
//                 name="purchasePrice"
//                 value={state.purchasePrice}
//                 onChange={handleRangeChange}
//                 max={1000000}
//             />

//             <Range
//                 label="Down Payment"
//                 name="downPayment"
//                 value={state.downPayment}
//                 onChange={handleRangeChange}
//                 max={state.purchasePrice}
//             />

//             <Range
//                 label="Interest Rate"
//                 name="interestRate"
//                 value={state.interestRate}
//                 onChange={handleRangeChange}
//                 max={20}
//                 min={0}
//             />

//             <Range
//                 label="Loan Term (Years)"
//                 name="loanTerm"
//                 value={state.loanTerm}
//                 onChange={handleRangeChange}
//                 max={30}
//                 min={1}
//             />

//             <div className="mt-4 p-4 bg-gray-100 rounded">
//                 <h3 className="font-bold">Summary</h3>
//                 <p>Loan Amount: ${loanAmount.toLocaleString()}</p>
//             </div>
//         </div>
//     );
// } 
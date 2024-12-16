import { ExpenseType } from "./commontypes"

export type ExpensePropsType = {
    id: string,
    amount: number
    category: string,
    note: string,
    date: string
}

export type ExpenseModalProps = {
    isOpen: boolean,
    onClose: ()=> void,
    expense: ExpenseType,
    onAddExpense: (expense:ExpenseType)=> void,
    onUpdateExpense: (expense:ExpenseType)=> void
}
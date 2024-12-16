import ExpenseList from "../components/expenselist"

export default function Expense(){
    return(
        <div>
            <h1 className="text-5xl text-center m-5 pt-3">Expense Tracker App</h1>
            <ExpenseList />
        </div>
    )
}
// 'use client'
// import axios from "axios"
// import { useState, useEffect } from "react";

// // async await
// // try catch
// // request with 'axios'

// export default function Todos() {
//     const [todos, setTodos] = useState([]);
//     const [loader, setLoader] = useState(false);

//     useEffect(() => {
//         getTodos()
//     }, [])

//     const getTodos = async () => {

//         try {
//             setLoader(true)
//             const result = await axios.get('https://dummyjson.com/todos');
//             console.log("Data From API is: ", result.data.todos);
//             setTodos(result.data.todos);
//         } catch (error) {
//             console.log("error", error)
//         }
//         finally {
//             setLoader(false)
//         }
//     }


//     return (
//         <>
//             <h1 className="text-center pt-5">TODOS</h1>
//             <br></br>
//             <button className="bg-yellow-400 ml-2" onClick={getTodos}>Get TODO's</button>
//             <br></br><br></br>
//             <h2 className="text-center"> {loader && "Loading"} </h2>
//             {
//                 todos.map((todo) => {
//                     return (
//                         <div className="ml-5">
//                             {todo.id} - {todo.todo}
//                         </div>
//                     )
//                 })
//             }
//         </>
//     )
// }



// Server Side API call

// import axios from "axios"

const getTodos = async () => {

    try {
        const result = await fetch('https://dummyjson.com/todos');
        console.log("Data From API is: ");
        const data = await result.json()
        console.log("data:", data);
        return data?.todos
    } catch (error) {
        console.log("error", error);
    }
}

export default async function Todos() {
    const todos = await getTodos();

    return (
        <>
            <h1 className="text-center pt-5">TODOS</h1>
            <br></br><br></br>
            {
                todos?.map((todo) => {
                    return (
                        <div className="ml-5" key={todo.id}>
                            {todo.id} - {todo.todo}
                        </div>
                    )
                })}
        </>
    )
}

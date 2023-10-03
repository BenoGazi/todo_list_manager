import {createContext} from 'react'
import {useState} from 'react'

const MyTodoContext = createContext(null)

export default function TodoContext ({children}) {
    const [todos, setTodos] = useState([]);

    <MyTodoContext.Provider value={todos}>{children}</MyTodoContext.Provider>
}
import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext()

function GlobalContextProvider({ children }) {
    const [tasks, setTasks] = useState([])
    const url = import.meta.env.VITE_API_URL

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url)
                const data = await response.json()
                console.log(data);
                setTasks(data)
            } catch (err) {
                console.error(err)
            }
        }
        fetchData()
    }, [])

    const values = { tasks, setTasks }

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    return useContext(GlobalContext)
}

export { GlobalContextProvider, useGlobalContext }


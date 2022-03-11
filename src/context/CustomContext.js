import { createContext ,useState} from "react"

const Context = createContext()

const Provider = ({children} )=> {
  const [sidebarCloser, setSidebarCloser] = useState(false)
  return (
    <Context.Provider value = {[sidebarCloser,setSidebarCloser]}>
      {children}
      </Context.Provider>
  )
}

export {Context, Provider} 
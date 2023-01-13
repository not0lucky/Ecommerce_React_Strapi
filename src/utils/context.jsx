import { createContext , useState , useEffect } from "react";

export const Context = createContext()

const AppContext = ({children}) => {
    
    const [showCart, setShowCart] = useState(false);
    


    return(
        <Context.Provider value={{showCart,setShowCart}}>
            {children}
        </Context.Provider>
    )
}

export default AppContext
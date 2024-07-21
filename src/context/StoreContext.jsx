import { createContext } from "react";

//create the context
const StoreContext = createContext(null);

const StoreContextProvider = (props) {

    const contextValue = {
        
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

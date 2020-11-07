import React,{createContext,useContext,useReducer} from 'react'

// prepares the datalayer
export const StateContext = createContext()

//Wrap our app and provide the data layer
export const ServiceProvider = ({ reducer, initialState, children }) => {
    return(
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}

//Pull information from the data layer
export const useStateValues = () => useContext(StateContext);

import { useContext,createContext,useEffect,useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [User, setUser] = useState();
    return (<AuthContext.Provider value={User}>{children}</AuthContext.Provider>)
}

export const    UserAuth = ()=>{
    return useContext(AuthContext);
}

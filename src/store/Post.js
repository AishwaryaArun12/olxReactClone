import { createContext, useState } from "react";

export const postContext = createContext(null);

export default function Post ({children}){
    const [postDetail,setPostDetail] = useState()
    return(
        <>
        <postContext.Provider value={{postDetail,setPostDetail}}>
            {children}
        </postContext.Provider>
        </>
    )
}
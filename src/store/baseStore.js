import { createContext, useContext } from "react";

export const BaseContext = createContext({
    page: 0,
    setPage: (num)=>{},
});

export function useBase () {
    return useContext(BaseContext);
}

import { useContext } from "react"
import { TrintaeUmContext } from "../context/trintaeum"

export const useContextTrintaeUm = () => {
    const data = useContext(TrintaeUmContext)
    
    return data
}
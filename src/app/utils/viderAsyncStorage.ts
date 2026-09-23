import { useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TransactionsContext from "../context/TransactionContext";

export function vider_lors_chargement(){
    useEffect(()=>{
        const chargement = async ()=>{
            const context = useContext(TransactionsContext)
            await AsyncStorage.removeItem("mes_depenses");
            alert('Supprimez avec succes !')
            context?.setAllTransactions([])
        }
        chargement()
    },[])
}
const context = useContext(TransactionsContext)
const vider_lors_press_bouton = ()=>{
    const execution = async()=>{
        await AsyncStorage.removeItem("mes_depenses");
        alert('Supprimez avec succes !')
        context?.setAllTransactions([])
    } 
    execution()
}

export default vider_lors_press_bouton
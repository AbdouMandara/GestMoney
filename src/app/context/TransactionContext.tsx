import { createContext, useState, ReactNode, useEffect } from "react";
import { TransactionFormSchema } from "../schemas/transaction.schema";
import type { Dispatch, SetStateAction } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


type TypeAllTransactionContext={
    allTransactions : TransactionFormSchema[],
    setAllTransactions: Dispatch<SetStateAction<TransactionFormSchema[]>>
}
const TransactionsContext = createContext<TypeAllTransactionContext|null>(null)

export function TransactionProvider({children}:{children : ReactNode}){
    const [allTransactions, setAllTransactions] = useState<Array<TransactionFormSchema>>([])
    const cle_stockage:any = process.env.EXPO_PUBLIC_KEY_TRANSACTIONS 

    useEffect(() => {
        const charger = async () => {
            try {
                const storedData = await AsyncStorage.getItem(cle_stockage);
                const transactions: Array<TransactionFormSchema> = storedData ? JSON.parse(storedData) : []
                setAllTransactions(transactions);
            } catch (error) {
                alert("Erreur : " + error);
            }
        }
        charger();
    }, []);

    return(
        <TransactionsContext.Provider value={{allTransactions, setAllTransactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}
export default TransactionsContext
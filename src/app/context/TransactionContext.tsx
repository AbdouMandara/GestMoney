import { createContext, useState, ReactNode } from "react";
import { TransactionFormSchema } from "../schemas/transaction.schema";
import type { Dispatch, SetStateAction } from "react";

type TypeAllTransactionContext={
    allTransactions : TransactionFormSchema[] | undefined,
    setAllTransactions: Dispatch<SetStateAction<TransactionFormSchema[] | undefined>>
}
const TransactionsContext = createContext<TypeAllTransactionContext|null>(null)

export function TransactionProvider({children}:{children : ReactNode}){
    const [allTransactions, setAllTransactions] = useState<Array<TransactionFormSchema>>()
    return(
        <TransactionsContext.Provider value={{allTransactions, setAllTransactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}
export default TransactionsContext
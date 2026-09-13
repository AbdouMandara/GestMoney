import { z } from 'zod'

export const transactionSchema = z.object({
    titre : z
        .string()
        .trim()
        .min(1, {error : 'Le titre est requis'})
        .max(50, {error:'Titre trop long (Caracteres max : 50)'}),

    type : z
        .enum(['gain', 'depense'], { error : 'Choisis un type sélectionné'}),
    
    prix : z.coerce
        .number({error : 'Le prix doit etre un nombre'})
        .positive({error:"Le prix doit etre positive"})

})

export type TransactionFormInput = z.input<typeof transactionSchema>
export type TransactionFormOutput = z.output<typeof transactionSchema>
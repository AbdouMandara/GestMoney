import { z } from 'zod'

const transactionTypeSchema = z.enum(["gain", "depense"], {
  error: "Choisis un type",
});
const transactionSchema = z.object({
    titre : z
        .string()
        .trim()
        .min(1, {error : 'Le titre est requis'})
        .max(50, {error:'Titre trop long (Caracteres max : 50)'}),

    type : transactionTypeSchema,
    
    prix : z
        .number({error : 'Le prix doit etre un nombre'})
        .positive({error:"Le prix doit etre positive"})
    })
export default transactionSchema;
export type TransactionFormSchema = z.infer<typeof transactionSchema>;
// export type TransactionFormInput = z.input<typeof transactionSchema>
// export type TransactionFormOutput = z.output<typeof transactionSchema>
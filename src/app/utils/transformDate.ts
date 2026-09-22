export default function transformDate(date_recu : Date){
    return new Date(date_recu).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })

}
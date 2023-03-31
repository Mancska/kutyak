
function RendezesKORSSzerint(lista, kulcs) {
    lista.sort(function (a, b) {
        return a.kor - b.kor;
    })




}
function RendezesNevSzerint(lista, kulcs) {
    lista.sort(function (a, b) {
        let ertek = 1;
        if (a[kulcs] < b[kulcs]) {
            ertek = -1;
        }
        return ertek;
    })
}
export function Rendezes(lista, kulcs) {

    if (typeof lista[0][kulcs] === "number") {
        RendezesKORSSzerint(lista, kulcs)
    } else {
        RendezesNevSzerint(lista, kulcs)
    }
}
export function szures(lista,kulcs,szuresfeltetel) {
    const szurtlista = lista.filter(function (a) {
        return a[kulcs].includes(szuresfeltetel);
    })
    return szurtlista;
}
function torles(){
    document.getElementById("netto").value = "";
}

/*function szamol(){
    let a = 5
    let b = 5

    let K = a + b

    document.getElementById("netto").value = K
}*/

function szamol(){
    document.szamold.netto.value = document.szamold.brutto.value * 0.665;
}

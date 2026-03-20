const a = 10;
const b = 33;

function somar(a,b){
    return parseInt(a) + parseInt(b);
}

let calcular = document.querySelector("#calcular");


calcular.addEventListener("click", () => {
    
    let a = document.querySelector("#valorA").value;
    let b = document.querySelector("#valorB").value;

    if(a.length > 0 && b.length > 0){
        alert (somar(a,b));
    } else {
        alert("Digite um valor");
    }
});
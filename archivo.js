let contador = 0;
const texto = document.getElementById("valor");
const btnSumar = document.getElementById("sumar");
const btnRestar = document.getElementById("restar");
btnSumar.addEventListener("click", () => {
    contador++;
    texto.textContent = contador;
});
btnRestar.addEventListener("click", () => {
    contador--;
    texto.textContent = contador;
});
document.title = "Contador: " + contador;  
window.addEventListener("click", () => {
    document.title = "Contador: " + contador;  
}   );      

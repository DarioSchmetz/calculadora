
//agrgar el boton de la calculadora que agreguemos
function agregar(valor){

    document.getElementById
    ('pantalla').value+=valor


}
function borrar(){
document.getElementById
('pantalla').value=''

}

function calcular(){
const vPantalla=document.getElementById('pantalla').value
const resultado=eval(vPantalla)
document.getElementById('pantalla').value=resultado }


function bor() {
    var pantalla = document.getElementById('pantalla');

    // pantalla.value = pantalla.value.slice(0, -1);
    // pantalla.value = pantalla.value.substring(0, pantalla.value.length - 1);
    if (pantalla.value.length > 0) {
        pantalla.value = pantalla.value.substring(0, pantalla.value.length - 1);
    }



}
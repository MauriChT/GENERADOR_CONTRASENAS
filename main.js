
const cadenaCarateres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_!@#$%^&*()';

const numbers = [0,1,2,3,4,5,6,7,8,9]

let cantidad = document.getElementById('cantidad');

let bt = document.getElementById('generar'); 

bt.addEventListener('click', () => generar());

let cajaNC = document.getElementById("contrasena")
let cFD = document.getElementById("cFD")

let btL = document.getElementById("btL").addEventListener("click", clear)

function clear() {
    console.log("click")
    cajaNC.value = "";
    cajaNC.placeholder ="contraseña";
    cFD.textContent = ""
}



function generar() {  

    let letrasM = 0;
    let letrasm = 0;
    let numeros = 0;
    let especiales = 0;

    let numDigitado = parseInt(cantidad.value)

    if (numDigitado >= 8) {

        let password = '';

        for (let i = 0; i < numDigitado ; i++) {
            let caracterAleatorio = cadenaCarateres[Math.floor(Math.random() * cadenaCarateres.length)];
            console.log(caracterAleatorio);
            password+=caracterAleatorio; 
        }

        console.log('Password: ' + password)
        cajaNC.value = password

        for (let i = 0 ; i < password.length; i++) {

            let char = password[i]

            if (!isNaN(parseInt(char))) {
                numeros++            
            } else if (/[a-z]/.test(char)) {
                letrasm++
            } else if (/[A-Z]/.test(char)) {
                letrasM++
            } else {
                especiales++
            }
        }

        console.log("numeros: " + numeros, "letrasM: " + letrasM, "letrasm: " + letrasm, 'especiales: '+ especiales)

              
        if (numeros>=1 && letrasm>=1 && letrasM>=1 && especiales >= 1) {

            cFD.textContent = "Contraseña segura"

        } else{             
            
            cFD.textContent = "Contraseña Debil"
        }       

    } 
    
    else {
        cajaNC.placeholder = ("Ingrese un numero mayor a 8 digitos");
    }
}



 



const TdateChile = document.getElementById("TdateChile");
/*const Shour = document.getElementById("hour");
const Smin = document.getElementById("min");
const Ssec = document.getElementById("sec");
const SminC = document.getElementById("minC");
const SsecC = document.getElementById("secC");
const vel = document.getElementById("vel");

const ShourI = document.getElementById("hourI");
const SminI = document.getElementById("minI");
const SsecI = document.getElementById("secI");
const SminCI = document.getElementById("minCI");
const SsecCI = document.getElementById("secCI");
const velI = document.getElementById("velI");
*/

const Bmute = document.getElementById("muteButton");
const tickTack = document.getElementById("tick-tack");
const tickTack2 = document.getElementById("tick-tack2");

const mensaje = document.getElementById("text");
const Acita = document.getElementById("Acita");

const now = new Date();
var min = now.getMinutes();
var hor = now.getHours();
var count = now.getSeconds();

var BmuteIsActive = false;
var tickORtack = false;

tickTack.muted = true;

let guion = ["Esta obra te robará un poco de tu tiempo. Y para esto toma el tiemo de tu ordenador o movil. Compara ambos tiempos.", 
"Piensa que todo lo que sucede en tu vida transcurre en un espacio de tiempo.", "¿Pero el tiempo existe?", 
'"La distinción entre el pasado, el presente y el futuro es solo una ilusión obstinadamente persistente"', 
"El tiempo humano no gira en forma circular. Corre hacia adelante en una línea recta. Es por esto que las personas no pueden ser felices: la felicidad busca la repetición", 
"Por esta razón, su autor se preocupó de hacer una especie de imitación móvil de la eternidad y, mientras organizaba el cielo, hizo, a semejanza de la eternidad inmóvil y una, esta imagen eterna que progresa según las leyes de los Números, esto que nosotros llamamos el Tiempo", 
"Escoger el propio tiempo es ganar tiempo", "El tiempo solo existe si lo dejas existir. El tiempo transcurre según como tu quieras que transcurra.", "Compara otra vez tus ambos tiempos", 
"Disculpa por robarte un pedazo de tu tiempo."];
let Cguion = ["Albert Einstein", "Milan Kundera", "Platon", "Sir Francis Bacon"];
let CPguion = [4, 5, 6, 7];
let Tguion = [10000, 
20000, 10000, 10000, 10000, 
10000, 10000, 30000, 20000, 
30000];
var Dnumber = 0;
var DTnumber = 0;

mensaje.textContent = guion[Dnumber];

window.addEventListener('resize', updateMbutton);
document.addEventListener('DOMContentLoaded', updateMbutton);

function updateMbutton(){
    var pRect = TdateChile.getBoundingClientRect();
    
    Bmute.style.top = (pRect.top + window.scrollY) + "px";
    Bmute.style.left = (pRect.left + window.scrollX) + "px";
    Bmute.style.width = pRect.width + "px";
    Bmute.style.height = pRect.height + "px";
};

setInterval(() => {
    /*ShourI.textContent = Shour.value;
    SminI.textContent = Smin.value;
    SsecI.textContent = Ssec.value;
    SminCI.textContent = SminC.value;
    SsecCI.textContent = SsecC.value;
    velI.textContent = vel.value;
    */
    count = count + /*parseInt(Ssec.value)*/ 1;
    if (count >= /*parseInt(SsecC.value)*/ 60) {
        min = min + /*parseInt(Smin.value)*/1;
        count = 0;
    }
    if (min >= /*parseInt(SminC.value)*/60) {
        hor = hor + /*parseInt(Shour.value)*/1;
        min = 0;
    }
    TdateChile.textContent = `${String(hor).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(count).padStart(2, '0')}`;
    Bmute.onclick = function() {
        if (!BmuteIsActive) {
            tickTack.muted = false;
            tickTack2.muted = false;
            BmuteIsActive = true;
        } else {
            tickTack.muted = true;
            tickTack2.muted = true;
            BmuteIsActive = false;
        }
    } 
    if (BmuteIsActive) {
        if (tickORtack) {
            tickTack.play();
        } else {
            tickTack2.play();
        }
    }
    if(!tickORtack){
        tickORtack = true;
    } else {
        tickORtack = false;
    }
}, 800);
setInterval(() => {
    mensaje.textContent = guion[Dnumber];
    if (CPguion.some(item => typeof item === 'number' && item === Dnumber + 1)) {
        Acita.textContent = Cguion[CPguion.findIndex(item => typeof item === 'number' && item === Dnumber + 1)];
    } else {
        Acita.textContent = "";
    }
    if (Dnumber < guion.length) {
        Dnumber = Dnumber + 1;
        DTnumber = DTnumber + 1;
    } else if (Dnumber === guion.length) {
        console.log("End.");
    }
}, Tguion[DTnumber]);

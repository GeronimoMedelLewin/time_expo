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

const now = new Date();
var min = now.getMinutes();
var hor = now.getHours();
var count = now.getSeconds();

var BmuteIsActive = false;

tickTack.muted = true;

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
            tickTack.play();
            tickTack.muted = false;
            BmuteIsActive = true;
        } else {
            tickTack.muted = true;
            BmuteIsActive = false;
        }
    }
}, 990);

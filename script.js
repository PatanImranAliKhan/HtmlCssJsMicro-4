const valueButtons = document.getElementById('valueButtons');
const specialButtons = document.getElementById('specialButtons');
const showResult = document.getElementById('showResult');

var inputs = [];
var results = [];

var data = "";

valueButtons.addEventListener('click', (event) => {
    if(event.target.id === "x") data+="*";
    else if(event.target.id === "del") data=data.slice(0,-1);
    else data+=event.target.id;
    showResult.innerHTML = data;
})


specialButtons.addEventListener('click', (event) => {
    if(event.target.id === "equal") {
        const result = eval(this.data);
        showResult.innerHTML = result;
        this.data = result;
    } else {
        data = "";
        showResult.innerHTML = 0;
    }
})
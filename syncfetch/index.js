let resetBtn = document.querySelector("#reset");
let ajaxBtn = document.querySelector("#ajax");
let sjaxBtn = document.querySelector("#sjax");

let counter = document.querySelector("#counter");
let result = document.querySelector("#result");


let count = 0;
setInterval(() => {
    count++;
    counter.innerHTML = count;
}, 50);

resetBtn.addEventListener('click', () => {
    count = 0;
    counter.innerHTML = count;
});

ajaxBtn.addEventListener('click', () => {
    fetch('https://api.kanye.rest').then(r => r.json()).then(q => {
        result.innerHTML = q.quote;
    });
});


sjaxBtn.addEventListener('click', () => {
    let req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {            
            result.innerHTML = JSON.parse(req.responseText).quote;
        }
    };
    req.open("GET", 'https://api.kanye.rest', false);
    req.send();
})


//Werkt
fetch('https://api.kanye.rest').then(r => r.json()).then(q => {
    document.querySelectorAll('h1')[0].innerHTML = q.quote;
});


//Werkt ook
localStorage.setItem('test', 'hello') 

//Werkt niet met file-based hosting, aha!
fetch('./data.json').then(r => r.json()).then(m =>{
    document.querySelectorAll('h1')[1].innerHTML = m.message;
})
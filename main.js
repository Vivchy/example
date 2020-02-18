let h1 = document.querySelector('h1');
h1.addEventListener('click', ()=>{
    console.log('check');
    h1.innerHTML = '<h1 style = "color: #123123;"> change</h1>';
})

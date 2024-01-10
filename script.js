const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const navleiste = document.querySelector('.navbar a')
const navleiste2 = document.querySelector('.navbar a::before')

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-brightness-high');
    if(this.classList.toggle('bi-sunglasses')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
        navleiste.style.color = '#000';
        navleiste2.style.background = '#000'

    }else{
        body.style.background = '#333333';
        body.style.color = 'white';
        body.style.transition = '2s';
        navleiste.style.color = '#fff';
        navleiste2.style.background = '#fff'
    }
})
const nav = document.querySelector('nav');
console.log(nav);


nav.addEventListener('click',function(){

    console.log(nav.classList);

    if(nav.classList.length>0){
        nav.classList.remove('nav-event-expand')
    }else{
        nav.classList.add('nav-event-expand')
    }
    
})
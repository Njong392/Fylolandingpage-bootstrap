const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-links');
const button = document.querySelector('#button');
const body = document.querySelector('#body');

function noScroll() {
    window.scrollTo(0, 0);
  }
  
  
  
button.addEventListener('click',()=>{
    document.querySelector('.bg-modal').style.display='flex';
    // add listener to disable scroll
  window.addEventListener('scroll', noScroll);
})

document.querySelector('.close').addEventListener('click',()=>{
    document.querySelector('.bg-modal').style.display='none'
    // Remove listener to re-enable scroll
  window.removeEventListener('scroll', noScroll);


})


burger.addEventListener('click', ()=>{
   
        if(menu.style.display==='none'){ //if the menu is hidden
            menu.style.display='block'; //remove hidden class and show menu
        }else{
            menu.style.display='none'; //else add hidden class and remove menu if menu is not hidden
        }
    });

console.log(menu);

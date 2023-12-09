let blb =document.getElementsByClassName('bulb')[0];
var heading = document.querySelector('h2');
let bton = document.getElementById('btnon');
let btoff = document.getElementById('btnoff');
var wish = document.getElementsByClassName('greet')[0];

// bton.addEventListener("click",function () {
//     blb.style.backgroundColor ='black';
// });
function greet(){
    var name = prompt(' Your Good Name');
    if(name==null){
        wish.textContent="Welcome !" 
        wish.classList.add('h1style');
    }
    else {
       
        wish.textContent="Welcome  " + name +" !";
        wish.style.color='red';
        wish.classList.add('h1style');
    }
   

}
function turnOn(){
    blb.style.backgroundColor ='yellow'
    heading.textContent="lets off the bulb & save energy"
    heading.style.color= 'green';


}
btoff.addEventListener('click', function(){
    blb.style.backgroundColor='transparent';
    heading.textContent="Lets On the bulb and remove darkness"
    heading.style.color= 'blue';

})
greet();
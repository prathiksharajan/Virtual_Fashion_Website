/*we are going to show a pop up whenever the button is clicked*/
let helloBtn=document.querySelector('button');
helloBtn.addEventListener('click', showMsg);

function showMsg(){
    alert("Hello World!");
}
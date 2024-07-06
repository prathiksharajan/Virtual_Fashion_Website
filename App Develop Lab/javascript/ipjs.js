let btn=document.querySelector('button');
btn.addEventListener('click',inputMsg);

function inputMsg(){
    let name=prompt('Enter name :');
    btn.textContent = 'Roll Node. 1:'+name;
  }
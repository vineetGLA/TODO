let input=document.querySelector('#input');

let btn=document.querySelector('#add');
let list=document.querySelector('#list');

function additem(text){
    let li=document.createElement('li');
    let txt=document.createElement('p');
    let div=document.createElement('div');
    let del=document.createElement('p');
    let edit=document.createElement('p')
      txt.innerText=text;
      del.innerText='❌';
      edit.innerText='📝';
      del.classList.add('del');
      edit.classList.add('edit');
      div.appendChild(edit);
      div.appendChild(del);
      li.appendChild(txt);
      li.appendChild(div);
      list.appendChild(li);
    
      input.value='';
}

btn.addEventListener('click',()=>{

    let text=input.value;
    if(text==''){
        alert('Please Enter a Todo');
        return;
    }
    additem(text);

});

input.addEventListener('keypress',(e)=>{
    if(e.key=='Enter'){
        let text=input.value;
        if(text==''){
            alert('Please Enter a Todo');
            return;
        }
        additem(text);
    }
})
// let del=document.querySelector('.del');
// let edit=document.querySelector('.edit');
// console.log(del);

// // del.addEventListener('click',(e)=>{
// //     console.log(e);
// //     e.target.parentElement.remove();
// // })

list.addEventListener('click',function(e){
    console.log(e.target.innerText);
    if(e.target.innerText=='❌')
    {
       
        e.target.parentElement.parentElement.remove();
       
    }
    else if(e.target.innerText=='📝'){
        console.log("edit");
        input.value=e.target.parentElement.parentElement.children[0].innerText;
        e.target.parentElement.parentElement.remove();
    }

})










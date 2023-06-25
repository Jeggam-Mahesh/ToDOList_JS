var temp=document.getElementById('popbox')
let emptyvar=document.getElementById('empty')
let removetaskpopup=document.getElementById('rpopup')
let tasklist=document.getElementById('head')
let specialcard=document.getElementById('specialcard');
let firstchild=document.getElementById('firstchild');
let inlinediv=document.getElementById('inlinediv');
function showpopup(){
 temp.classList.add('showpop')
}

function hide(){ 
 temp.classList.remove ('showpop')
}

//*******************Adding new caard  ***************
let container=document.getElementById('maincontainer');
// let specialCrd=document.getElementById('specialcard');
let cnt=0;
let cnt2=0;
let sample;
let ceeeer;
let cardd;
let flag=false;
let map=new Map();
       
function newcard(){
  cnt++; 
  cnt2++;
  if(flag){
    container.style.display='none';
    }
    else{
      container.style.display='flex';
    }
  //  container.style.display='flex';
  temp.classList.remove ('showpop')
let card=document.createElement('div');
card.setAttribute('id',`card${cnt}`)

let tripname=document.createElement('h3')
let hr=document.createElement('hr');
tripname.setAttribute('id',`trip${cnt}`);
  
//  console.log(tripname.getAttribute('id','value'))
let inputtext=document.getElementById('tripname');
   tripname.innerHTML=`${inputtext.value}`;
let ad_btn=document.createElement('button');
let del_btn=document.createElement('button');
let taskdiv=document.createElement('div'); 

 taskdiv.setAttribute('id',`taskdiv${cnt}`);
 ad_btn.setAttribute('id',`wrt_task${cnt}`);
 //storing in map
 map.set(`wrt_task${cnt}`,`taskdiv${cnt}`);
 console.log(map);

 taskdiv.setAttribute('class','taskdivision')
 ad_btn.setAttribute('class','wrt_task')
del_btn.setAttribute('id','deleticon');

let deleticon=document.createElement('img');
let wrt_task=document.createElement('img');

wrt_task.src="./images/writing.png"; 
wrt_task.style.width="20px";
wrt_task.style.height="20px";
ad_btn.appendChild(wrt_task);

deleticon.src="./images/del-icon.png";
deleticon.style.width="20px";
deleticon.style.height='20px';
del_btn.appendChild(deleticon);
container.appendChild(card);
card.setAttribute('class','taskcard');
card.appendChild(tripname);
card.appendChild(hr);
card.appendChild(taskdiv)
card.appendChild(del_btn);
card.appendChild(ad_btn);

//deleting a card.*********** 
del_btn.addEventListener('click',()=>{
 card.remove();
 cnt2--;
 if(cnt2<1){
  emptyvar.style.display='block';
  }
})

//SHOW TASK POPUP.
ad_btn.addEventListener('click',()=>{
 sample=ad_btn.getAttribute('id','value')
   ceeeer=map.get(sample)
  show_taskpopup();
  
})

// let add_item_btn=document.getElementById('additems');

// ad_btn.setAttribute('onclick','show_taskpopup()')
// if(cnt>0){

   cardd = document.getElementById('card1');
    let tempp=document.getElementById('trip1');


    tempp.addEventListener('click',()=>{
     tasklist.style.display='none';
      container.style.display="none";
    specialcard.style.display='block'
      inlinediv.appendChild(cardd);
      flag=true;
    })
if(cnt2>0){
  emptyvar.style.display='none';
  }

}
console.log(cnt2)



function spcl_card_close(){
  tasklist.style.display='block';
 specialcard.style.display="none";
 container.style.display="flex"
 inlinediv.removeChild(cardd);
 firstchild.appendChild(cardd);
 firstchild.style.display='block'
 flag=false;
}

//function showtask popup and hidden


function show_taskpopup(c){

 removetaskpopup.style.display="block";  
 container.style.display="none";

}
function hiden(){
  let container=document.getElementById('maincontainer');
 removetaskpopup.style.display="none";
 container.style.display="flex";
}
//FUNCTION ADD SUBTASKS
function addtodo(){
  removetaskpopup.style.display="none";
if(flag){
container.style.display='none';
}
else{
  container.style.display='flex';
}
  let append_to_div=document.getElementById(`${ceeeer}`);
  let inputitem=document.getElementById('itemname');
  let tasktodo=document.createElement('h4');
  
  let done_button=document.createElement('button');
  done_button.setAttribute('class','done_button');
  done_button.innerHTML="Done"
  tasktodo.innerHTML=`${inputitem.value}`;
  tasktodo.appendChild(done_button);
  
  append_to_div.appendChild(tasktodo);
  //MARKING TASKS DONE
let toggle=true;
  done_button.addEventListener('click',()=>{
    if(toggle){
    tasktodo.classList.add('marktext')
    toggle=false;}
    else{
      tasktodo.classList.remove('marktext')
      toggle=true;
    }
  })
}
 
//  console.log(cardd);
//  
// function back(){
//   specialcard.style.display='none';
//   container.style.display='flex';
// }

 

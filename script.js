 var temp=document.getElementById('popbox')
 let emptyvar=document.getElementById('empty')
 let fg=false;
 function showpopup(){
  emptyvar.style.display='none';
 
  if(fg){
  temp.classList.remove('showpop')
  fg=false;
  }
  else{
    fg=true
  temp.classList.add('showpop')  }
 }

 function hide(){
  temp.classList.remove ('showpop')
 }

 //*******************Adding new caard  ***************
 let container=document.getElementById('maincontainer');
 let specialCrd=document.getElementById('specialcard');
 var cnt=0;
 let map=new Map();

 function newcard(){
   temp.classList.remove ('showpop')
let card=document.createElement('div');
card.setAttribute('id',`card${cnt}`)
let hr=document.createElement('hr');
 let tripname=document.createElement('h3')
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


//deleting a card. 
 del_btn.addEventListener('click',()=>{
  card.remove();
 })

ad_btn.setAttribute('onclick','show_taskpopup()')

let add_item_btn=document.getElementById('additems');
add_item_btn.addEventListener('click',()=>{

   let inputitem=document.getElementById('itemname');
   let tasktodo=document.createElement('p');
   tasktodo.innerHTML=`${inputitem.value}`;
   let sample=map.get(`wrt_task${cnt-1}`);
  //  console.log(cnt);
  //  console.log(sample);
  let taskwrite=document.getElementById(`${sample}`)
  taskwrite.appendChild(tasktodo);
  removetaskpopup.style.display="none";
  container.style.display="flex";
  })

  let tr=document.getElementById(`trip0`);
  // console.log(tr.innerHTML);
  
  tr.addEventListener('click',()=>{
    console.log("hello");
   
  let carddd=document.getElementById('card0');
  specialCrd.appendChild(carddd);
    container.style.display="none";
    specialCrd.style.display="block";
  })

  cnt++; 
 }
 function spcl_card_close(){
  specialCrd.style.display="none";
  container.style.display="flex"
 }
// let aas=document.getElementById('trip1')


 //function showtask popup and hidden

 let removetaskpopup=document.getElementById('rpopup')
function show_taskpopup(c){

  removetaskpopup.style.display="block";  
  container.style.display="none";

 }
 function hiden(){
  removetaskpopup.style.display="none";
  container.style.display="flex"
}
  //////////


  ////special card function


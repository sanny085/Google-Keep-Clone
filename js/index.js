var htmlData;

const addButton = document.querySelector('#add');
const section = document.querySelector('#section');
// //Remainder
const sectionRem = document.querySelector('#sectionRem');
const secRData = document.querySelector('#hideRemainder');

// Defining fat Arrow function updateLSData
const updateLSData = () => {
  const textAreaData = document.querySelectorAll('textarea');
  const userData = [];
  console.log(textAreaData); 
   
  textAreaData.forEach((collectData) =>{
      return userData.push(collectData.value);
  }) 
  
  // set data into local storage 
  localStorage.setItem('userData', JSON.stringify(userData));
}

const addNewNote = (text = '') =>
  { 
   //index page column creation
   const colsec = document.createElement('div'); 
   colsec.classList.add('col-xs-6'); 
   colsec.classList.add('col-sm-6'); 
   colsec.classList.add('col-md-4');
   colsec.classList.add('col-lg-3');  
  
   //index page div note creation
   const note1 = document.createElement('div');
   note1.classList.add('note');
   note1.classList.add('m-2');
   // remainder of note
    const secRem = document.createElement('div');
    secRem.classList.add('col-xs-6');
    secRem.classList.add('col-sm-6');
    secRem.classList.add('col-md-4');
    secRem.classList.add('col-lg-3'); 
 
     htmlData = `<div class="operation">
              <button  class="pBell border-0 bg-none" style="float-left" > <i class="fas fa-bell pBell1"></i></button>
             
            <div style="float: right">
              <button class="edit border-0 bg-none" > <i class="fas fa-edit edit1"></i></button>
              <button class="delete border-0 bg-none" > <i class="fas fa-trash-alt trash1"></i></button>
            </div>
            </div>
          <div class="main ${text ? " " : "hidden"}"></div>
          <textarea class="${text ? "hidden":" "} form-control" rows="15" cols="5" name="" id=""  ></textarea>
        `;
   //html data insert into note div
   note1.insertAdjacentHTML("afterbegin", htmlData);
   
   //note1.innerHTML =  htmlData;
   
   //index page child in parent
   colsec.appendChild(note1);
   section.appendChild(colsec); 
    
   
   //Taking Reference for all Button and main
   const editButton = note1.querySelector('.edit'); 
   const deleteButton = note1.querySelector('.delete'); 
   const mainDiv = note1.querySelector('.main'); 
   const textArea = note1.querySelector('textarea'); 
   const pBellButton = note1.querySelector('.pBell');

   mainDiv.innerHTML = text;
   textArea.value  = text;
    
 


   pBellButton.addEventListener('click', ()=> {
      note1.classList.toggle('redborder');
      
    });  

   //Deleting the node
   deleteButton.addEventListener('click', () => {
       colsec.remove();
       updateLSData();
   });
       
   //Toggle using edit button ( function calling and defining ) 
   editButton.addEventListener('click', ()=> {
       mainDiv.classList.toggle('hidden');
       textArea.classList.toggle('hidden');
    });
  
    // change data to hold given all input
   textArea.addEventListener('change', (event)=> {
      const value = event.target.value;
      mainDiv.innerHTML = value;
      
      //calling updateLSData fat arrow funtion
      updateLSData();
   });
}

 
//get data from local storage       
const userData = JSON.parse(localStorage.getItem('userData'));
if(userData){
userData.forEach( (collectData) => addNewNote(collectData))
};


addButton.addEventListener("click", () => addNewNote());
//Remainder page

  

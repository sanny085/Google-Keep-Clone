const addButton = document.querySelector('#add');
const section = document.querySelector('#section');

// Defining fat Arrow function updateLSData
const updateLSData = () =>{
  const textAreaData = document.querySelectorAll('textarea');
  const userData = [];
  
  console.log(textAreaData);

  textAreaData.forEach((collectData) =>{
      return userData.push(collectData.value);
  }) 
  console.log(userData);
  // set data into local storage 
  localStorage.setItem('userData', JSON.stringify(userData));

}



const addNewNote = (text = '') =>
{ 
   //column creation
   const colsec = document.createElement('div'); 
   colsec.classList.add('col-sm-6'); 
   colsec.classList.add('col-md-4');
   colsec.classList.add('col-lg-3');  
   

   //div note creation
   const note1 = document.createElement('div');
   note1.classList.add('note');
   note1.classList.add('m-3');
   
    const htmlData = `<div class="operation"  style="float: right">
              <button class="edit border-0 bg-none"> <i class="fas fa-edit"></i></button>
              <button class="delete border-0 bg-none" > <i class="fas fa-trash-alt"></i></button>
          </div>
          <div class="main ${text ? " " : "hidden"}"></div>
          <textarea class="${text ? "hidden":" "} form-control" rows="15" name="" id=""  ></textarea>
        `;
 //html data insert into note div
 note1.insertAdjacentHTML("afterbegin", htmlData);

  //child in parent
   section.appendChild(colsec,colsec.appendChild(note1));
  
   //Taking Reference for all Button and main
   const editButton = note1.querySelector('.edit'); 
   const deleteButton = note1.querySelector('.delete'); 
   const mainDiv = note1.querySelector('.main'); 
   const textArea = note1.querySelector('textarea'); 
    
   mainDiv.innerHTML = text;
   textArea.value  = text;


   //deleting the node
   deleteButton.addEventListener('click', ()=>{
       colsec.remove();
       updateLSData();
   });
  
   //toggle using edit button
   editButton.addEventListener('click', ()=>{
       mainDiv.classList.toggle('hidden');
       textArea.classList.toggle('hidden');
    });
  
    // change data to hold given all input
   textArea.addEventListener('change', (event)=>{
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

addButton.addEventListener("click", () => addNewNote() );
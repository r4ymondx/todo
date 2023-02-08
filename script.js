 let addToDo = document.getElementById('addbtn');
 let toDoContainer = document.getElementById('container');
 let inputField = document.getElementById('inputfield');
 

addToDo.addEventListener('click', function() {
  



    if(inputField.value === ""){
        return;
     }

    let newDiv = document.createElement("div");


 //add newtext to div
    const newText = document.createElement("p");
     newText.innerHTML = inputField.value;
     newText.classList.add("para")
     newDiv.appendChild(newText);


     //add new div to container
    newDiv.classList.add("todostyle");
   
     toDoContainer.appendChild(newDiv);
     inputField.value = "";
    newDiv.style.cursor = "pointer";
    
    


     const newBtn = document.createElement("BUTTON");
     newBtn.innerHTML = "Del";
     newBtn.classList.add("bttn")
     newDiv.appendChild(newBtn);

     newBtn.addEventListener('click', function(){
        newDiv.style.backgroundColor = newDiv.style.display = "none";
     });

    
      
      

    //  const currentDiv = document.getElementById("div1");
    //  document.body.insertBefore(newDiv, currentDiv);


});




// addToDO.addEventListener('click', function () {
//    var paragraph = document.createElement('p');
//     paragraph.classList.add('parastyling');
//         paragraph.innerText = inputField.value;
//     toDoContainer.appendChild(paragraph);
//     inputField.value = '';
//     paragraph.addEventListener('click', function() {
//         paragraph.style.display = 'none';
//         paragraph.removeChild(paragraph);
//     })
// })
// addToDO.addEventListener('click', function() {
//     const paragraph = document.createElement('p');
//     paragraph.classList.addd('parastyling');
//     paragraph.innerText = inputField.value;
//     toDoContainer.appendChild(paragraph);
//     inputField.value = '';
// })




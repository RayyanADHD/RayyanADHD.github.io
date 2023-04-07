const blueBtn = document.getElementById('blue-btn');
const greenBtn = document.getElementById('green-btn');
const purpleBtn = document.getElementById('purple-btn');

blueBtn.addEventListener('click', () => {
  document.body.classList.remove('green', 'purple');
  document.body.classList.add('blue');
  document.querySelectorAll('*').forEach(elem => {
    elem.style.color = '';
    elem.style.fontFamily = '';
  });
  
});

greenBtn.addEventListener('click', () => {
  document.body.classList.remove('blue', 'purple');
  document.body.classList.add('green');
  document.querySelectorAll('*').forEach(elem => {
    elem.style.color = 'red';
    elem.style.fontFamily = 'Cursive';
  });
});

purpleBtn.addEventListener('click', () => {
  document.body.classList.remove('blue', 'green');
  document.body.classList.add('purple');
  document.querySelectorAll('*').forEach(elem => {
    elem.style.color = 'black';
    elem.style.fontFamily = 'Arial,san-serif';
  });
  
});

function display(Displayed) {
    var answer = document.getElementById("mcq");
    if (Displayed) {
      mcq.style.display = "block";
    } else {
      mcq.style.display = "none";
    }
  }



function formsubmit(){

   var studentyear = document.getElementById("year").value;
    var residence = document.getElementById("residence").value;
    if (studentyear === "Forth"){
        if (residence !== "None"){
            alert("No residence availabe for Forth Years.Retry filling the form!");
            return false;
        }
    }
    
    if (residence === "Shirreff") {
        alert("Residence not available.Retry filling the form!");
        return false;
    }
    else if( residence ==="Gerard"){
        alert("Residence not available.Retry filling the form!");
        return false;
        
    }
    else{
        alert("Form submitted successfully");
    }
    
    
    
}





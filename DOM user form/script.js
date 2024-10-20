document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let Phonenumber= document.getElementById('Phonenumber').value;
  
  
    let displayInfo = `Name: ${name}<br>
    age:${age}<br>
    Phonenumber: ${Phonenumber}`; 
  

    document.getElementById('displayInfo').innerHTML = displayInfo; 
  });

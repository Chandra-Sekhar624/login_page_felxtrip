// scrolling animation start
window.onload = () => {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const toggleLinks = document.querySelectorAll(".register a");

  signupForm.classList.add("active");//akhan thka handel hoba kon from ta defalet loading hoba(ex:loginForm or signupForm)
  toggleLinks.forEach(link =>
    link.addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.toggle("active");
      signupForm.classList.toggle("active");
    })
  );
};

// scrolling animation end
// function cheackName(){
//   let nameSing=document.getElementById("sName").value;
//   let nameRegex=/^[a-z]{5,15}$/;
//   let isCheacked=nameRegex.test("nameSing");
//   console.log(isCheacked);
//   if(isCheacked){
//       document.getElementById(sing).disabled=false;
//       document.getElementById(sName).classList.remove('Is Invalid');
//       document.getElementById(error).innerHTML='';
//   }else{
//     document.getElementById(sing).disabled=true;
//     document.getElementById(sName).classList.add('Is Invalid');
//     document.getElementById(error).innerHTML='InvalidName'
//   }
  
// }

function checkName() {
  let nameSing = document.getElementById("sName").value;
  let nameRegex = /^[a-zA-Z ]{3,10}$/;
  let isChecked = nameRegex.test(nameSing);
  console.log(isChecked);

  if (isChecked) {
    document.getElementById("sing").disabled = false;
    document.getElementById("sName").classList.remove('invalid');
    document.getElementById("errorName").innerHTML = '';
  } else {
    document.getElementById("sing").disabled = true;
    document.getElementById("sName").classList.add('invalid');
    document.getElementById("errorName").innerHTML = 'Invalid Name';
  }
}

function checkEmailid(){
  let emailSing=document.getElementById('sEmail').value;
  let emailRegex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ;
  let isChecked=emailRegex.test(emailSing);
  console.log(isChecked);
  if(isChecked){
      document.getElementById("sing").disabled=false;
      document.getElementById('sEmail').classList.remove('invalid');
      document.getElementById('errorEmail').innerHTML='';

  }else{
    document.getElementById('sing').disabled = true;
    document.getElementById('sEmail').classList.add('invalid');
    document.getElementById('errorEmail').innerHTML='Invalid Email Id';
  }
  
}

function checkPhone(){
  let numSing=document.getElementById("sPhone").value;
  let numRegex=/^(\+\d{1,3}[- ]?)?\d{10}$/;
  let isChecked=numRegex.test(numSing);
  console.log(isChecked);

  if(isChecked){
    document.getElementById("sing").disabled=false;
    document.getElementById("sPhone").classList.remove('invalid');
    document.getElementById('errorPhone').innerHTML='';
  }else{
    document.getElementById('sing').disabled=true;
    document.getElementById('sPhone').classList.add('invalid');
    document.getElementById('errorPhone').innerHTML='Invalid mobile Number';
  }
}

// function checkPass(){
//   var password=document.getElementById('pass').value;
//   let passRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//   var confrimePassword=document.getElementById('conPass').value;
//   let isCheacked=passRegex.test(password);
//   console.log(isCheacked);
//   if(isCheacked){
//     document.getElementById('errorPass').innerHTML='';
//     function checkCPass(){
//       var password=document.getElementById('pass').value;
//       var confrimePassword=document.getElementById('conPass').value;
//       if(password==confrimePassword){
//         document.getElementById('sing').disabled=false;
//         document.getElementById('errorCPass').innerHTML='';
//       }else{
//         document.getElementById('sing').disabled=true;
//         document.getElementById('errorCPass').innerHTML='PassWord Is Not Match...';
//       }
//       console.log(checkCpass);
//     }
    

//   }else{
//     document.getElementById('errorPass').innerHTML='Must be Use uppercase letter, one lowercase letter, and one number or special character.';
    
//   }
  
// }


function checkPass(){
  var password = document.getElementById('pass').value;
  let passRegex =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,25}$/;
  let isChecked = passRegex.test(password);

  if (isChecked) {
    document.getElementById('errorPass').innerHTML = '';
  } else {
    document.getElementById('errorPass').innerHTML = 'Must use at least min 8-25 characters with one letter and one number.';
    document.getElementById('sing').disabled = true;
  }
 
}

function checkCPass(){
  var password = document.getElementById('pass').value;
  var confirmPassword = document.getElementById('conPass').value;

  if (password === confirmPassword) {
    document.getElementById('errorCPass').innerHTML = '';
    document.getElementById('sing').disabled = false;
  } else {
    document.getElementById('errorCPass').innerHTML = 'Password does not match.';
    document.getElementById('sing').disabled = true;
  }
}

function togglePassword() {
  const elements = [
      document.getElementById('pass'),  // 0 - password input
      document.getElementById('toggleIcon1') 
  ];

  if (elements[0].type === "password") {
      elements[0].type = "text";
      elements[1].classList.remove('fa-eye-slash');
      elements[1].classList.add('fa-eye'); 
  } else {
      elements[0].type = "password";
      elements[1].classList.remove('fa-eye');
      elements[1].classList.add('fa-eye-slash'); 
  }
}



function togglecPassword() {
  const elements = [
      document.getElementById('conPass'),  
      document.getElementById('toggleIcon') 
  ];

  if (elements[0].type === "password") {
      elements[0].type = "text";
      elements[1].classList.remove('fa-eye-slash');
      elements[1].classList.add('fa-eye'); 
  } else {
      elements[0].type = "password";
      elements[1].classList.remove('fa-eye');
      elements[1].classList.add('fa-eye-slash'); 
  }
}


function showLogin(){
  document.getElementById('loginPage').style.display='block';
}

function login(){
  let pass = document.getElementById('password').value;
  if(pass === "12345"){
    alert("Login berhasil");
    document.getElementById('loginPage').style.display='none';
  } else {
    alert("Password salah");
  }
}

function logout(){
  alert("Logout berhasil");
}

function order(product){
  document.getElementById('orderPage').style.display='block';
  document.getElementById('productName').value = product;
}

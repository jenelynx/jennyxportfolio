// =========================
// SHOW / HIDE PASSWORD
// =========================
function togglePassword() {
  
  const password = document.getElementById("password");
  
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
  
}


// =========================
// LOGIN SYSTEM
// =========================
document.addEventListener("DOMContentLoaded", function() {
  
  const loginForm = document.getElementById("loginForm");
  
  if (loginForm) {
    
    loginForm.addEventListener("submit", function(e) {
      
      e.preventDefault();
      
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      
      // demo account
      if (email === "jenelynbaldosunido@gmail.com" && password === "jenelyn13") {
        
        localStorage.setItem("userEmail", email);
        
        window.location.href = "index.html";
        
      } else {
        
        alert("Invalid Credentials");
        
      }
      
    });
    
  }
  
  
  // =========================
  // DASHBOARD SESSION CHECK
  // =========================
  
  const welcomeText = document.getElementById("welcomeUser");
  
  if (welcomeText) {
    
    const storedEmail = localStorage.getItem("userEmail");
    
    if (storedEmail) {
      
      welcomeText.innerText = "Welcome, " + storedEmail + "!";
      
    } else {
      
      window.location.href = "login.html";
      
    }
    
  }
  
});


// =========================
// LOGOUT
// =========================
function logout() {
  
  localStorage.removeItem("userEmail");
  
  window.location.href = "login.html";
  
}


// =========================
// GOOGLE LOGIN
// =========================
function handleCredentialResponse(response) {
  
  localStorage.setItem("userEmail", "Google User");
  
  alert("Google Login Successful!");
  
  window.location.href = "index.html";
  
}


// =========================
// REGISTER + OTP SYSTEM
// =========================

// generate OTP after register
function generateOTP() {
  
  const otp = Math.floor(100000 + Math.random() * 900000);
  
  // save OTP
  localStorage.setItem("otpCode", otp);
  
  // save user email from register
  const email = document.getElementById("regEmail").value;
  localStorage.setItem("userEmail", email);
  
  alert("Your OTP is: " + otp);
  
  // go to OTP page
  window.location.href = "otp.html";
  
}


// =========================
// VERIFY OTP
// =========================
function verifyOTP() {
  
  const userOTP = document.getElementById("otpInput").value;
  
  const storedOTP = localStorage.getItem("otpCode");
  
  if (userOTP == storedOTP) {
    
    alert("Registration Successful!");
    
    window.location.href = "index.html";
    
  } else {
    
    alert("Invalid OTP. Try again.");
    
    document.getElementById("otpInput").value = "";
    
  }
  
}


// =========================
// RESEND OTP
// =========================
function resendOTP() {
  
  const newOTP = Math.floor(100000 + Math.random() * 900000);
  
  localStorage.setItem("otpCode", newOTP);
  
  alert("New OTP sent: " + newOTP);
  
}

// =========================
// Index (homepage)
// =========================
function viewProject(){
alert("Opening Projects Section...");
}

function learnMore(){
alert("More information about the portfolio.");
}
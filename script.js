

function validateEmail() {
  const emailInput = document.getElementById("email-field");
  const email = emailInput.value;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

 if (emailRegex.test(email)) {
   const url = "success.html?email=" + encodeURIComponent(email);
   window.location.href = url;
 } else {
   document.getElementById("errormessage").style.display = "block";
   document.getElementById("email-field").style.backgroundColor =
     "hsl(4, 100%, 95%)";
   document.getElementById("email-field").style.border =
     "1.5px solid hsl(4, 100%, 67%)";
   document.getElementById("email-field").style.color = "hsl(4, 100%, 67%)";
 }
}

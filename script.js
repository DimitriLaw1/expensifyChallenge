// Logic for collapsible section in transactions_table.php
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Logic for POST request to expensify API to return access token
 async function submitHandler (){
var postURL = 'https://cors-anywhere.herokuapp.com/https://www.expensify.com/api?command=Authenticate'
const partnerPassword = 'd7c3119c6cdab02d68d9'
fetch(postURL,{
    method: 'POST',
    body: JSON.stringify({
        partnerName: 'applicant',
        partnerUserID: 'expensifytest@mailinator.com',
        partnerPassword:partnerPassword,
        partnerUserSecret: 'hire_me',

}),
headers: { 'Content-type': 'application/json; charset=UTF-8' }
}).then(res => {
   
    return res.json()
}).then(data =>{
    console.log(data)
});

}
submitHandler();
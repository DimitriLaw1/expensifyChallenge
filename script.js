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
fetch(postURL,{
    method: 'POST',
    body: JSON.stringify({
        partnerName: 'applicant',
        partnerPassword:'d7c3119c6cdab02d68d9',
        partnerUserID: 'expensifytest@mailinator.com',
        partnerUserSecret: 'hire_me',

}),
headers: {
    'Content-Type': 'application/json'
},
}).then(res => {
   
    return res.json()
}).then(data =>{
    console.log(data)
});

}
submitHandler();
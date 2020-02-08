
// Setting iteration amount
var amount = 300;
// Setting a variable and using querySelector to select div of class "hello"
var new_div = document.querySelector("div.hello").outerHTML;
// Creating a for loop to iterate through amount 
for(var i = 0; i < amount; i++){
// Adding in div with styling for each iteration
  document.body.insertAdjacentHTML('beforeend', new_div);

  if(amount % 5 === 0){
      var element = document.querySelector("div.hello");
      element.innerHTML = "Hello, CoverMyMeds"
    

  }
}
# Job Application Tracker - JavaScript Questions and Answers :-

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: These methods are used to select elements from the HTML document.

### getElementById
It selects only one element using id.
Example 1 :
          let title = document.getElementById("title");
        
### getElementsByClassName
It selects multiple elements using class name.
Example 2 :
          let cards = document.getElementsByClassName("card");
          
### querySelector
It selects the first matching element.
Example 3:
          let btn = document.querySelector(".button");
          
### querySelectorAll
It selects all matching elements.
Example:
        let buttons = document.querySelectorAll(".button");
        
## 2. How do you create and insert a new element into the DOM?

Ans: We use createElement() to create a new element and appendChild() to add it to the page.

Example:

let newDiv = document.createElement("div");
newDiv.innerText = "Hello World";
document.body.appendChild(newDiv);

## 3. What is Event Bubbling? And how does it work?

Ans : Event Bubbling means an event moves from the child element to the parent element.
Example:

<div id="parent"> <button id="btn">Click</button> </div>
If we click the button:

-->Button event runs
-->Parent event runs
So, the event goes from inside to outside.

This is called Event Bubbling.

## 4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation means adding an event listener to a parent element instead of many child elements.

Example:

document.querySelector(".jobs").addEventListener("click", function(e){
   if(e.target.classList.contains("delete")){
      console.log("Delete clicked");
   }
});

##5. What is the difference between preventDefault() and stopPropagation() methods?

Ans : 
      preventDefault()
It stops the default browser action.
Example:

document.querySelector("form").addEventListener("submit", function(e){
   e.preventDefault();
});
It prevents form submission.

  stopPropagation()
It stops event bubbling.
Example:

button.addEventListener("click", function(e){
   e.stopPropagation();
});
It stops the event from going to parent element.

// var fruits = ["Mango","Apple","Banana","Orange",]

// fruits.push("Graphs");

// console.log(fruits);



// var fruits = ["Mango","Apple","Banana","Orange",]

// fruits.pop();

// console.log(fruits);



// var fruits = ["Mango","Apple","Banana","Orange",]

// fruits.shift();

// console.log(fruits);





// var fruits = ["Mango","Apple","Banana","Orange",]

// fruits.unshift("Graphs");
 
// console.log(fruits);



// var fruits = ["Mango","Apple","Banana","Orange",]

// fruits[1] = "Strawberry"
// console.log(fruits);









// var fruits = ["Mango","Apple","Banana","Orange",]


// for(var i = 0 ; i<=fruits.length ; i++ ){

//     console.log(fruits[i]);
    
// }



// var fruits = ["Mango","Apple","Banana","Orange",]

// fruits.forEach(function(fruit){

// console.log(fruit);



// })



// var fruits = ["Mango","Apple","Banana","Orange",]

// for(var i = fruits.length; i>=0 ; i--){

// console.log(fruits[i]);

// }


// var fruits = ["Mango","Apple","Banana","Orange",]


// for(var i = fruits.length ; i>=0 ; i--){

// console.log(fruits[i]);

// }



// var fruits = ["Mango","Apple","Banana","Orange",]

// var i = 0;

// while(i<=fruits.length){


//     console.log(fruits[i]);

// i++
    
// }


// var button = document.getElementById("btn");

// button.addEventListener("click", function(){


// alert("Button clicked");



// })

var idcount = 1

function addtodo(){
    
    var input = document.getElementById("inp")
    var todos = document.getElementById("todos");
    var element = document.createElement("div");
    element.setAttribute( 'id' , idcount);
    
    element.innerHTML = `<p>${input.value}</p> <button>Delete</button>`
    todos.appendChild(element);
    idcount++  
    input.value = ""
   
    
}
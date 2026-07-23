
// Contact form message

document.querySelector("form").addEventListener("submit", function(e){

e.preventDefault();


let name = document.querySelector("input[type='text']").value;

let phone = document.querySelector("input[type='tel']").value;

let message = document.querySelector("textarea").value;



if(name=="" || phone=="" || message==""){

alert("Please fill all details.");

return;

}



alert(
"Thank you " + name + 
"! Your enquiry has been submitted."
);



this.reset();


});





// WhatsApp dynamic message

let whatsapp = document.querySelector(".whatsapp");


whatsapp.addEventListener("click", function(){


let msg = 
"Hello Kamal Electrical & Electronics, I need your service.";


this.href =
"https://wa.me/91XXXXXXXXXX?text=" 
+ encodeURIComponent(msg);

document.addEventListener("DOMContentLoaded", function(){


let dropdown = document.querySelector(".dropdown");


if(dropdown){

dropdown.addEventListener("click", function(e){

this.classList.toggle("active");

});

}


});
function searchProduct(){


let input =
document.getElementById("searchBox")
.value
.toLowerCase();



let products =
document.querySelectorAll(".product-card");



products.forEach(product=>{


let text =
product.innerText.toLowerCase();



if(text.includes(input)){

product.style.display="block";

}

else{

product.style.display="none";

}


});


}




function filterProduct(){


let category =
document.getElementById("categoryBox")
.value;



let products =
document.querySelectorAll(".product-card");



products.forEach(product=>{


if(category=="all" ||
product.dataset.category==category)

{

product.style.display="block";

}

else{

product.style.display="none";

}


});


}
});

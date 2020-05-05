document.getElementsByTagName("p");
document.getElementsByClassName("my-class");

// returns the (one) element with the id "my-ID"
document.getElementById("my-ID");
// returns the first paragraph element
document.querySelector("p");

// returns the element with the id "my-ID"
document.querySelector("#my-ID");

// returns an array of all elements with the class "my-class"
document.querySelectorAll(".my-class");

document.querySelector("header").outerHTML;

document.querySelector(`header > h1`).innerHTML;
// returns: Site Title

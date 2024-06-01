//your JS code here. If required.
let username = document.getElementById('username').value;
let password = document.getElementById('password').value;
let btn = document.getElementById('submit');
let checkbox = document.getElementById('checkbox');
let existBtn = document.getElementById('existing');
let form = document.querySelector("form");

form.addEventListener('submit', (event) => {
	event.preventDefault();
	if(checkbox.checked){
		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
	}else{
		localStorage.removeItem("username");
		localStorage.removeItem("password");
	}
	alert(`Logged in as ${username}`);

	showButton();

	form.reset(); 
});

function showButton() {

	let user = localStorage.getItem("username");
	let pass = localStorage.getItem("password");
	if(user && pass){
		existBtn.style.display = "block";
	}
	else {
		existBtn.style.display = "none";
	}
}
function login_Saved() {
	let user = localStorage.getItem("username");
	let pass = localStorage.getItem("password");

	 if (user && pass) {
	    alert(`Logged in as ${user}`);
	    form.reset();
	  }
}
existBtn.style.display = "none";
existBtn.addEventListener('click', login_Saved);
showButton();
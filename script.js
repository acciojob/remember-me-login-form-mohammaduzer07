//your JS code here. If required.
let userName = document.getElementById('username');
let passWord = document.getElementById('password');
let btn = document.getElementById('submit');
let checkBox = document.getElementById('checkbox');
let existBtn = document.getElementById('existing');
let form = document.querySelector("form");

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const username = userName.value;
	const password = passWord.value;
	const checkbox = checkBox.checked;
	if(checkbox){
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

function login_Saved() {
	let username = localStorage.getItem("username");
	let password = localStorage.getItem("password");

	 if (username && password) {
	    alert(`Logged in as ${username}`);
	    form.reset();
	  }
}
function showButton() {

	let username = localStorage.getItem("username");
	let password = localStorage.getItem("password");
	if(username && password){
		existBtn.style.display = "block";
	}
	else {
		existBtn.style.display = "none";
	}
}
existBtn.style.display = "none";
existBtn.addEventListener('click', login_Saved);
showButton();
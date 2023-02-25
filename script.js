// selecting html elements
let profileImage = document.getElementById("profile-image");
let profileHeading = document.getElementById("profile-heading");
let profileOutput = document.getElementById("profile-output");

// user data storage
let user = {};

// this function makes api call and update data on user display
function getRandomUser(){
	fetch("https://randomuser.me/api/")
	.then((res)=>{
		return res.json();
	})
	.then((res)=>{
		user = res;
		profileImage.src = res.results[0].picture.large;
		profileHeading.innerHTML = res.results[0].name.first +" "+ res.results[0].name.last;
		profileOutput.innerHTML = "";
	})
	.catch();	
}

// this function prints age from storage data
function printAge(){
	profileOutput.innerHTML = user.results[0].dob.age;
}

// this function prints email from storage data
function printEmail(){
	profileOutput.innerHTML = user.results[0].email;
}

// this function prints phone from storage data
function printPhone(){
	profileOutput.innerHTML = user.results[0].phone;
}

// Initail function call to load user display
getRandomUser();
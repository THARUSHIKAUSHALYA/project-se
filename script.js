function findTechnician() {

    alert("Technician search feature will be available soon.");

}
/*login*/
function loginUser(event) {

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {

        alert("Please enter email and password.");

        return;
    }

    alert("Login successful!");
	window.location.href = "customer-dashboard.html";

}
/* register*/
function registerUser(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("registerEmail").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("registerPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let role = document.getElementById("role").value;


    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;
    }


    if (role === "") {

        alert("Please select an account type.");

        return;
    }


    alert("Registration successful!");


    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Role:", role);
}
//customer-registwer
function showMessage(pageName) {

    alert(pageName + " feature will be available soon.");

}


function emergencyRequest() {

    alert("Emergency service request feature will be available soon.");

}
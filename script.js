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

/*find technician*/
function selectCategory(card){
	document.querySelector(".selected") //find selected card
	?.classList.remove("selected"); //remove selected 
	card.classList.add("selected"); //select click card
}
/*location*/
if (document.getElementById("map")) {

    let map = L.map("map").setView([7.8731, 80.7718], 7);

    L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
        {
            attribution: "Tiles &copy; Esri"
        }
    ).addTo(map);
	
	//location Select
	 let marker;

    map.on("click", function(e) {

        let lat = e.latlng.lat;
        let lng = e.latlng.lng;

        if (marker) {
            map.removeLayer(marker);
        }

        marker = L.marker([lat, lng]).addTo(map);

        marker.bindPopup("Selected Location").openPopup();

        document.getElementById("location").value =
            lat.toFixed(6) + ", " + lng.toFixed(6);

    });


}

//tecnicion_dashboad

function acceptRequest() {
    alert("Service request accepted!");
}

function rejectRequest() {
    alert("Service request rejected!");
}

//admin dashboard

function verifyTechnician() {
    alert("Technician verified successfully!");
}

function rejectTechnician() {
    alert("Technician verification rejected!");
}

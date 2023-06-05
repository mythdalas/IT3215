var $ = function (id) { return document.getElementById(id); };

var volunteerArray = [];

var displayVolunteers = function () {   
    // display the volunteers in the text area
    var volunteerString = "";

    console.log(volunteerArray)

// Loop through the volunteerArray and build the volunteerString
for (var i = 0; i < volunteerArray.length; i++) {
    var volunteer = volunteerArray[i];
    var index = i + 1; // Add 1 to the index
    volunteerString += index + ": " + volunteer + "\n";
}

// Display the volunteers with ID "volunteerList"
$("volunteerList").value = volunteerString;
	
	
};

var addVolunteer = function () {
    // get the data from the form
    var volunteerString = $("first_name").value + " " + $("last_name").value;

    // store the data in an array
    volunteerArray.push(volunteerString);
    
    // display the volunteers and clear the add form
    displayVolunteers();
    
    // get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};


var deleteVolunteer = function () {
    // Get the data from the form
    var volunteerString = $("first_name").value + " " + $("last_name").value;

    console.log(volunteerArray.indexOf(volunteerString));

    console.log(volunteerString);

    // Search for the volunteer in the array
    var indexToDelete = -1;
    for (var i = 0; i < volunteerArray.length; i++) {
        // Check if the current volunteer matches the entered full name
        if (volunteerArray[i] === volunteerString) {
            indexToDelete = i; // Store the index of the volunteer to be deleted
            break; // Exit the loop since we found a match
        }
    }

    // Check if a match was found and delete the volunteer from the array
    if (indexToDelete !== -1) {
        volunteerArray.splice(indexToDelete, 1);
    } else {
        console.log("Volunteer not found."); // Display a message if no match was found
    }
	
   
	 
    // display the volunteers and clear the add form
    displayVolunteers();
    
    // get the delete form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};

var clearList = function () {   
    // delete the data from the arrays
    volunteerArray = [];
    
	//   alternative way to delete all of the data from the array
	//    volunteerArray.length = 0;
    
    // remove the volunteers data from the web page
    $("volunteerList").value = "";
    
    $("first_name").focus();
};

var sortList = function () {   
    // sort the scores
    volunteerArray.sort();
    
    // display the scores
    displayVolunteers();    
};

//When the page is fully loaded, the buttons will be mapped to the JavaScript functions
window.onload = function () {
    $("add_button").onclick = addVolunteer;
	$("delete_button").onclick = deleteVolunteer;
    $("clear_button").onclick = clearList;    
    $("sort_button").onclick = sortList;    
    $("first_name").focus();
};
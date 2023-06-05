//function created to replace the content
function replaceContent() {
	
	//declaring the variables
	var myRecipientName;
	var myHostName;
	
	//setting the variable to the input field's id named recipientNameInput's value
	myRecipientName = document.getElementById("recipientNameInput").value;
	
	// Assign the element and props of hostNameInput to myHostName
	myHostName = document.getElementById("hostNameInput").value;

	// Logging the values to the console for debugging
	console.log('Variable myRecipientName: ' + myRecipientName);
	console.log('Variable myHostName: ' + myHostName);
	
	
	//setting the HTML code in the span id recipientNamePlaceholder with the variable 
	document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;

	// Set the innerHTML of the span Element with the above value.
	document.getElementById("hostNamePlaceholder").innerHTML = myHostName;
} 
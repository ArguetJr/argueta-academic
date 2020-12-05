function openRef(evt, refName) {
	// Declaring all variables
	var i, tabcontent, topnavlinks;
	
	// Getting all the elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
}
	
	// Getting all elements with class="topnavlinks" and remove the class "active"
	topnavlinks = document.getElementsByClassName("topnavlinks");
	for (i = 0; i < topnavlinks.length; i++) {
		topnavlinks[i].className = topnavlinks[i].className.replace( " active", "");
}
	
	// Show the current tab and add an "active" class to the button that opened the tab
	document.getElementById(refName).style.display = "block";
	evt.currentTarget.className += " active";
	
	// Show the specific tab content
	document.getElementById(refName).style.display = "block";
	
	// Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

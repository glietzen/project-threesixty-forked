$(document).ready(function() {
	var userContainer = $(".user-data");	
	currentUser();

	function currentUser() {
		$.get("api/users/current", function(user) {
			console.log(user);
			userContainer.empty();
			var currentUserFull = $("<div>");
			currentUserFull.text(user.firstname + " " + user.lastname);
			userContainer.append(currentUserFull);
		});
	}
});
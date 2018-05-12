$(document).ready(function() {
	var userContainer = $(".users");
	getUsers();

	function getUsers() {
		$.get("api/users", function(users) {
			console.log("Users", users);
			showUsers();
		});
	}

	function showUsers() {
		userContainer.empty();
		var userArray = [];
		for (var i = 0 ; i < users.length ; i++) {
			userArray.push(displayUser(users[i]));
		}
		userContainer.append(userArray);
	}

	function displayUser(user) {
		var newUserContainer = $("<div>");
		newUserContainer.addClass("user-row");
		newUserContainer.text(user.username);
		return newUserContainer;
	}
});
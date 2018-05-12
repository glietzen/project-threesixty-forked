$(document).ready(function() {
	var userContainer = $(".users");
	var users;
	var username;

	getUsers();

	function addUser(userData) {
		$.post("/api/users", userData, function() {
			window.location.href = "/users";
		});
	}

	function getUsers() {
		$.get("api/users", function(data) {
			users = data;
			if (users.length > 0) {
				console.log("Users", users);
				showUsers();
			}
			else {
				userContainer.text("No users found");
			}
		});
	}

	function deleteUser(id) {
		$.ajax({
			method: "DELETE",
			url: "/api/users/" + id
		}).then(function() {
			getUsers();
		});
	}

	function showUsers() {
		userContainer.empty();
		var userArray = [];
		var userTable = $("<table>");
		userTable.html("<thead><tr><th scope='col'>Username</th><th scope='col'>First</th><th scope='col'>Last</th><th scope='col'>Role</th></tr></thead>");
		for (var i = 0 ; i < users.length ; i++) {
			userArray.push(displayUser(users[i]));
		}
		userTable.append(userArray);
		userContainer.append(userTable);
	}

	function displayUser(user) {
		var newUserContainer = $("<tr>");
		newUserContainer.addClass("user-row");
		var newUsername = $("<td>");
		newUsername.text(user.username);
		var newUserFirst = $("<td>");
		newUserFirst.text(user.firstname);
		var newUserLast = $("<td>");
		newUserLast.text(user.lastname);
		var newUserRole = $("<td>");
		newUserRole.text(user.role);
		newUserContainer.append(newUsername);
		newUserContainer.append(newUserFirst);
		newUserContainer.append(newUserLast);
		newUserContainer.append(newUserRole);
		return newUserContainer;
	}
});
$(document).ready(function() {
	var userContainer = $(".user-data");
	var users;
	var currentUser;

	$(document).on("click", "a.delete", handleUserDelete);
	$(document).on("click", "a.update", handleUserEdit);

	currentUser();

	function currentUser() {
		$.get("api/users/current", function(user) {
			currentUser = user;
			getUsers();
		});
	}

	function addUser(userData) {
		$.post("/api/users", userData, function() {
			window.location.href = "/users";
		});
	}

	function getUsers() {
		$.get("api/users", function(data) {
			users = data;
			if (users.length > 0) {
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
		userTable.addClass("table");
		userTable.html("<thead><tr><th scope='col'>ID#</th><th scope='col'>Username</th><th scope='col'>"+
			"First</th><th scope='col'>Last</th><th scope='col'>Update</th><th scope='col'>Delete</th></thead>");
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
		var newUserId = $("<td>");
		newUserId.text(user.id);
		var newUserDelete = $("<td>");
		newUserDelete.html("<a href='' class='delete btn btn-dark'>Delete</a>");
		var newUserUpdate = $("<td>");
		newUserUpdate.html("<a href='' class='update btn btn-dark'>Update</a>");
		newUserContainer.append(newUserId);
		newUserContainer.append(newUsername);
		newUserContainer.append(newUserFirst);
		newUserContainer.append(newUserLast);
		newUserContainer.append(newUserUpdate);
		newUserContainer.append(newUserDelete);
		newUserContainer.data("user", user);
		return newUserContainer;
	}

	function handleUserDelete(e) {
		e.preventDefault();
		var thisUser = $(this)
		.parent()
		.parent()
		.data("user");
		if (thisUser.id !== currentUser.id) {
			deleteUser(thisUser.id);
		}
		else {
			alert("Don't delete your own account!");
		}
  	}

	function deleteUser(id) {
		var conf = confirm("Are you sure you want to delete this user?");
		if (conf) {
			$.ajax({
				method: "DELETE",
				url: "/api/users/" + id
			})
			.then(function() {
				getUsers();
			});
		}
	}

	function handleUserEdit(event) {
		event.preventDefault();
		var thisUser = $(this)
		.parent()
		.parent()
		.data("user");
		window.location.href = "/edit?user_id=" + thisUser.id;
	}
});
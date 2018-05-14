$(document).ready(function() {

	var url = window.location.search;
	var userId;

	if (url.indexOf("?user_id=") !== -1) {
		userId = url.split("=")[1];
		getUserData(userId);
	}

	var firstname = $("#firstname");
	var lastname = $("#lastname");
	var email = $("#email");

	$(edit).on("submit", function handleFormSubmit(event) {
		event.preventDefault();
		if (!firstname.val().trim() || !lastname.val().trim() || !email.val().trim()) {
			return;
		}
		var thisUser = {
			firstname: firstname.val().trim(),
			lastname: lastname.val().trim(),
			email: email.val()
		};
	
		thisUser.id = userId;
		updateUser(thisUser);
	});

	function getUserData(id) {
		$.get("/api/users/" + id, function(data) {
			if (data) {
				firstname.val(data.firstname);
				lastname.val(data.lastname);
				email.val(data.email);
			}
		});
	}

	function updateUser(user) {
		$.ajax({
			method: "PUT",
			url: "/api/users",
			data: user
		})
			.then(function() {
			window.location.href = "/user-admin";
		});
	}
});
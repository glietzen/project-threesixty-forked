$(document).ready(function () {
  
  // jobContainer holds all of our posts
  var jobContainer = $(".job-container");
  var jobStatusSelect = $("#status");

// This function grabs posts from the database and updates the view
function getJobs(status) {
  var statusString = status || "";
  if (statusString) {
    statusString = "/status/" + statusString;
  }
  $.get("/api/projects" + statusString, function(data) {
    console.log("Projects", data);
    projects = data;
    if (!projects || !projects.length) {
      displayEmpty();
    }
    else {
      initializeRows();
    }
  });
}

// GET ALL THE JOBS
getJobs();

  // InitializeRows handles appending all of our constructed PROJECT HTML inside
  // jobContainer
  function initializeRows() {
    jobContainer.empty();
    var projectsToAdd = [];
    for (var i = 0; i < projects.length; i++) {
      projectsToAdd.push(createNewRow(projects[i]));
    }
    jobContainer.append(projectsToAdd);
  }

// This function displays a message when there are no jobs
function displayEmpty() {
  jobContainer.empty();
  var messageH2 = $("<h2>");
  messageH2.css({ "text-align": "center", "margin-top": "50px" });
  messageH2.html("No projects yet, navigate <a href='/new-project'>here</a> in order to create a new job.");
  jobContainer.append(messageH2);
}































});// end document.ready function ------------------>>



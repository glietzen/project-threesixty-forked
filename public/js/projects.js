$(document).ready(function() {
  // jobContainer holds all of our Projects
  var jobContainer = $('.job-container');
  var jobStatusSelect = $('#status');

  // This function grabs Projects from the database and updates the view
  function getJobs(status) {
    var statusString = status || '';
    if (statusString) {
      statusString = '/status/' + statusString;
    }
    $.get('/api/projects' + statusString, function(data) {
      console.log('Projects', data);
      projects = data;
      if (!projects || !projects.length) {
        displayEmpty();
      } else {
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


  // This function constructs a Project's HTML
  function createNewRow(project) {
    var newProjectCard = $("<div>");
    newProjectCard.addClass("card");
    var newProjectCardHeading = $("<div>");
    newProjectCardHeading.addClass("card-header");
    var deleteBtn = $("<button>");
    deleteBtn.text("x");
    deleteBtn.addClass("delete btn btn-danger");
    var editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-default");
    var newProjectTitle = $("<h2>");
    var newProjectTitle = $("<small>");
    var newProjectStatus = $("<h5>");
    newProjectStatus.text(project.status);
    newProjectStatus.css({
      float: "right",
      "font-weight": "700",
      "margin-top":
      "-15px"
    });
    var newProjectCardBody = $("<div>");
    newProjectCardBody.addClass("card-body");
    var newProjectBody = $("<p>");
    newProjecttTitle.text(project.title + " ");
    newProjecttBody.text(project.body);
    newProjectCardHeading.append(deleteBtn);
    newProjectCardHeading.append(editBtn);
    newProjectCardHeading.append(newProjecttTitle);
    newProjectCardHeading.append(newProjectCategory);
    newProjectCardBody.append(newProjectBody);
    newProjectCard.append(newProjectCardHeading);
    newProjectCard.append(newProjectCardBody);
    newProjectCard.data("Project", Project);
    return newProjectCard;
  }

  // This function displays a message when there are no jobs
  function displayEmpty() {
    jobContainer.empty();
    var messageH2 = $('<h2>');
    messageH2.css({ 'text-align': 'center', 'margin-top': '50px' });
    messageH2.html(
      "No projects yet, navigate <a href='/new-project'>here</a> in order to create a new job."
    );
    jobContainer.append(messageH2);
  }
}); // end document.ready function ------------------>>

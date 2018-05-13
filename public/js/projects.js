$(document).ready(function() {
  // jobContainer holds all of our Projects
  var jobContainer = $('.job-container');
  var jobStatusSelect = $('#status');

  // DONE:
  // click events for edit and delete buttons
  $(document).on('click', 'button.delete', handleProjectDelete);
  $(document).on('click', 'button.edit', handleProjectEdit);
  jobStatusSelect.on('change', handleStatusChange);
  var projects;

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

  // DONE:
  // API call to delete posts
  function deleteProject(id) {
    $.ajax({
      method: 'DELETE',
      url: '/api/projects/' + id
    }).then(function() {
      getJobs(jobStatusSelect.val());
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
  // FIXME: This needs a little work so that it displays properly
  function createNewRow(project) {
    var newProjectCard = $('<div>');
    newProjectCard.addClass('card');
    var newProjectCardHeading = $('<div>');
    newProjectCardHeading.addClass('card-header');
    var deleteBtn = $('<button>');
    deleteBtn.text('x');
    deleteBtn.addClass('delete btn btn-danger');
    var editBtn = $('<button>');
    editBtn.text('EDIT');
    editBtn.addClass('edit btn btn-default');
    var newProjectTitle = $('<h2>');
    var newProjectTitle = $('<small>');
    var newProjectStatus = $('<h5>');
    newProjectStatus.text(project.status);
    newProjectStatus.css({
      float: 'right',
      'font-weight': '700',
      'margin-top': '-15px'
    });

    // MATH FOR CALCING VALUES OF COLUMNS
    var job_total = project.paint_cost + project.wood_rot;
    var newProjectCardBody = $('<div>');
    newProjectCardBody.addClass('card-body');
    var newProjectBody = $('<p>');
    newProjectTitle.text(project.name + ' ');
    newProjectBody.html(
      'Total Job Value: $' + project.job_total + '<br>' +
      'Estimated Labor: $' + .35 * project.job_total + '<br>' +
      'Estimated Material: $' + .15 * project.job_total + '<br>' +
      'Estimated Workers Comp Burden: $' + .13 * .35 * project.job_total + '<br>' +
      'Estimated PM Cost: $' + .05 * project.job_total + '<br>' +
      'Estimated Sales Cost: $' + .07 * project.job_total + '<br>' +
      'next line of code'
  
  );

    // APPEND EM' ALL
    newProjectCardHeading.append(deleteBtn);
    newProjectCardHeading.append(editBtn);
    newProjectCardHeading.append(newProjectTitle);
    newProjectCardHeading.append(newProjectStatus);
    newProjectCardBody.append(newProjectBody);
    newProjectCard.append(newProjectCardHeading);
    newProjectCard.append(newProjectCardBody);
    newProjectCard.data('Project', project);
    return newProjectCard;
  }

  // DONE: figure out what project to delete based on id and call deleteProject
  function handleProjectDelete() {
    var currentProject = $(this)
      .parent()
      .parent()
      .data('Project');
    deleteProject(currentProject.id);
  }

  // DONE: figure out which project we want to edit by id and take us to the appropriate url
  function handleProjectEdit() {
    var currentProject = $(this)
      .parent()
      .parent()
      .data('Project');
    window.location.href = '/new-project?project_id=' + currentProject.id;
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

  // DONE: handle reloading new projects when the status changes (filter)
  function handleStatusChange() {
    var newProjectStatus = $(this).val();
    getJobs(newProjectStatus);
  }
}); // end document.ready function ------------------>>

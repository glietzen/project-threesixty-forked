$(document).ready(function() {
  var url = window.location.search;
  var projectId;

  var updating = false;

  // If we have this section in our url, we pull out the post id from the url
  // In localhost:8080/new-project?project_id=1, projectId is 1
  if (url.indexOf('?project_id=') !== -1) {
    projectId = url.split('=')[1];
    getProjectData(projectId);
  }

  // Getting jQuery references to the post body, title, form, and category select
  var newProjForm = $('#new-job');
  var name = $('#jobName');
  var status = $('#jobStatus');
  var paintPrice = $('#paintPrice');
  var woodRotPrice = $('#woodRotPrice');
  var actualLabor = $('#actualLabor');
  var actualMaterial = $('#actualMaterial');
  // Giving the postCategorySelect a default value
  status.val('Queued');
  // Adding an event listener for when the form is submitted
  $(newProjForm).on('submit', function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body or a title
    if (
      !name.val().trim() ||
      !paintPrice.val().trim() ||
      !woodRotPrice.val().trim()
    ) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newProject = {
      name: name.val().trim(),
      status: status.val(),
      paint_cost: paintPrice.val().trim(),
      wood_rot: woodRotPrice.val().trim(),
      labor_actual: actualLabor.val().trim(),
      material_actual: actualMaterial.val().trim()
    };

    console.log(newProject);

    // DONE: this stuff here ->>>>>>>>>>>>>>>>>>>>>>>>>>>

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      newProject.id = projectId;
      updateProject(newProject);
    } else {
      submitProject(newProject);
    }
  });

  //DONE >>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<
  //submits a new project to the api route and takes user to the project page upon completion

  function submitProject(Project) {
    $.post('/api/project/new', Project, function() {
      window.location.href = '/projects';
    });
  }

  //DONE >>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<
  //gets the job data if we're editing it (get route from the api route)
  function getProjectData(id) {
    $.get('/api/projects/' + id, function(data) {
      if (data) {
        // If this post exists, prefill our cms forms with its data
        name.val(data.name);
        status.val(data.status);
        paintPrice.val(data.paintPrice);
        woodRotPrice.val(data.woodRotPrice);
        actualLabor.val(data.actualLabor);
        actualMaterial.val(data.stactualMaterialatus);
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }

  //DONE >>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<
  //update with a "PUT" and take the user back to the projects page
  function updateProject(Project) {
    $.ajax({
      method: 'PUT',
      url: '/api/projects',
      data: Project
    }).then(function() {
      window.location.href = '/projects';
    });
  }
});

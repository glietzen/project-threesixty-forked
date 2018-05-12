$(document).ready(function() {
  
  // Getting jQuery references to the post body, title, form, and category select
  var newProjForm = $("#new-job");
  var name = $("#jobName");
  var status = $("#jobStatus");
  var paintPrice = $("#paintPrice");
  var woodRotPrice = $("#woodRotPrice");
  var actualLabor = $("#actualLabor");
  var actualMaterial = $("#actualMaterial");
  // Giving the postCategorySelect a default value
  status.val("Queued");
  // Adding an event listener for when the form is submitted
  $(newProjForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body or a title
    if (!name.val().trim() || !paintPrice.val().trim() || !woodRotPrice.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newProject = {
      name: name.val().trim(),
      status: status.val(),
      paintPrice: paintPrice.val().trim(),
      woodRotPrice: woodRotPrice.val().trim(),
      actualLabor: actualLabor.val().trim(),
      actualMaterial: actualMaterial.val().trim()
    };

    console.log(newProject);

    
    // TODO: this stuff here ->>>>>>>>>>>>>>>>>>>>>>>>>>>

    // // If we're updating a post run updatePost to update a post
    // // Otherwise run submitPost to create a whole new post
    // if (updating) {
    //   newPost.id = postId;
    //   updatePost(newPost);
    // }
    // else {
    //   submitPost(newPost);
    // }
  });


  //TODO >>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<
  //submits a new project to the api route and takes user to the project page upon completion
  submitProject((Project) => {

  });
  
  //TODO >>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<
  //gets the job data if we're editing it (get route from the api route)
  getProjectData((id) => {

  });
  
  //TODO >>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<
  //update with a "PUT" and take the user back to the projects page
  updateProject((Project) => {

  });

  });
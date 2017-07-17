document.addEventListener('DOMContentLoaded', function(){
  //click on item to mark completed
  $("ul").on("click", "li", function(){
    $(this).toggleClass('completed');
  });
  //click on x to delete todo
  $("ul").on("click", "span", function(e){
    e.stopPropagation();
    $(this).parent().fadeOut(500,
      function(){$(this).remove()});
  });

  $("input[type='text']").on("keypress", function(e){
    if(e.which === 13){
      var toDoText = $(this).val();
      $('ul').append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + toDoText + "</li>");
      $(this).val("");
    };
  });

  $("i.fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
  });
});

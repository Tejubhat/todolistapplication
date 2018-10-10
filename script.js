$(function() {
  console.log('testing');
  //adding new list item on click
  $('.addBtn').on('click', function() {
    console.log('Item');
    var $input = $('input').val();
    if($input === ' ') {
      return 0;
    } else {
     var item = '<li>' + $input + '</li>';
    $('ul').append(item);
    };
  });

//adding ability to hide text from title
$(document).ready(function(){
    $('#tasks').click(function(){
        $(text).hide();
    });
 });

  //adding ability to hide items
  $('body').on('click','li', function() {
   console.log('test');
   if ($(this).hasClass('done') ===true) {
     $(this).removeClass('done');
   } else {
 $(this).addClass('done');
   };
  });
});

  $(document).ready(function(){
     $('body').on('click','li', function() {
        $(this).hide();
     });
  });

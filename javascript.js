
/* hide/show  */
$('.boxes ul li a').click(function(){
  $('.info > div').hide();
 $('.info > div').eq($(this).parent().index()).show();
});

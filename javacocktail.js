alert("welcome to cocktails!")


$('#show').click(function()
{
$('#show').css('display','none');
$("#data").show();
$("#hide").show();
});

$(document).ready(function() {
$('#show').hide();
function show_image(){
	$(".Romulus-Image").show();
}
$(".Romulus").click(show_image);

$("#show").click(show_method);
function show_method(){
	$("#data").show();
}

});
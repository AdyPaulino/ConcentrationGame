$(document).ready(function (){
	var i = 0;
	var array = $('#image_list').find('a');
	
	$('#previous').click(function(){
		if (i == 0){
			i = (array.length-1);
		} else {
			--i;
		}
		changeImage();
	});
	
	$('#next').click(function(){
		if (i == (array.length -1)){
			i = 0;
		} else {
			++i;
		}
		changeImage();
	});
	
	
	
	function changeImage(){
		img = $(array.get(i)).attr('href');
		$('#image').attr('src', img);
		$('#caption').html($(array.get(i)).attr('title'));
		
	}	
	
});
$(document).ready(function (){
	var i = 0;
	var array = $('#image_list').find('a');
	var thumbs = $('#image_list_thumbs').find('img');
	
	$('#previous').click(function(){
		if (i == 0){
			i = (array.length-1);
		} else {
			--i;
		}
		changeImage(i);
	});
	
	$('#next').click(function(){
		if (i == (array.length -1)){
			i = 0;
		} else {
			++i;
		}
		changeImage(i);
	});
	
	for (var a=0; a< thumbs.length; a++){
		$(thumbs.get(a)).click(function(){
			changeImage($(this).parent().index());
		});
	}
	
	function changeImage(index){
		img = $(array.get(index)).attr('href');
		$('#image').attr('src', img);
		$('#caption').html($(array.get(index)).attr('title'));
		
	}	
	
});
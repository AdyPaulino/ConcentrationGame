$(document).ready(function() {
  var $listNode = $("#image_list_game");
  var $listCache = $("#image_list");
  var $imageNode = $("#image");
  var links = $listNode.find('a');
  var linksCache = $listCache.find('a');

  var i, linkNode,linkCache, image;
  var imageCache = [];
  var imageTurned = [];
  var imageCounter = 0;

  for(i = 0; i < links.length; i++){
    linkNode = links[i];
    linkCache = linksCache[i];

    $(linkNode).on('click', function(e) {
      e.preventDefault();
      imageCounter = $(this).parent().index();
      imageTurned[imageCounter] = true;
      swapImage(imageCounter);
    });

    image = new Image();
    image.src = $(linkCache).attr('href');
    image.title = $(linkCache).attr('title');
    imageCache.push(image);
  }

  function swapImage(count) {
    image = imageCache[count];
    if (imageTurned[count] == true){
        document.getElementById(count+1).src = image.src;
        $imageNode.attr('alt', image.title);
    }else {
        alert('missed');
    }
    
  }

});
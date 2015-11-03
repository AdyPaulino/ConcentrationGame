$(document).ready(function() {
    var $listSpaces = $("#image_list_game");
    var $listPictures = $("#image_list");
    var linksSpaces = $listSpaces.find('a');
    var linksPicture = $listPictures.find('a');

    var i, linkSpace,linkPicture, image;
    var imageCache = [];
    var imageTurned = [];
    var imageRandom = [];
    var imageCounter = 0;

    //CONITNUE for all spaces!!!!
    for(i = 0; i < linksPicture.length; i++){
        //randomly place the pictures
        var times = linksSpaces.length / 2;
        do {
            var place = Math.floor((Math.random() * linksSpaces.length) + 0);
            if (imageRandom[place] == true){
                continue;
            }
            linkPicture = linksPicture[i];
            image = new Image();
            image.src = $(linkPicture).attr('href');
            image.title = $(linkPicture).attr('title');
            imageCache[place] = image;
            imageRandom[place] = true;
            times--;
        } while (times > 0);   
        
        linkSpace = linksSpaces[i];
        $(linkSpace).on('click', function(e) {
            e.preventDefault();
            imageCounter = $(this).parent().index();
            //mark the image as turned
            image = imageCache[imageCounter];
            imageTurned[image.title] = true;
            swapImage(imageCounter);
        });
        
        function swapImage(count) {
            image = imageCache[count];
            if (imageTurned[image.title] == true){
                document.getElementById(count+1).src = image.src;
                //$imageNode.attr('alt', image.title);
            }else {
                alert('missed');
            }
        }
    }
    
    
    
   /* for(i = 0; i < linksSpaces.length; i++){
        linkSpace = linksSpaces[i];
        //linkPicture = linksPicture[i];

        $(linkSpace).on('click', function(e) {
            e.preventDefault();
            imageCounter = $(this).parent().index();
            imageTurned[imageCounter] = true;
            swapImage(imageCounter);
        });

        image = new Image();
        image.src = $(linkPicture).attr('href');
        image.title = $(linkPicture).attr('title');
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

    } */

});
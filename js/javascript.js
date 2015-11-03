$(document).ready(function() {
    var $listSpaces = $("#image_list_game");
    var $listPictures = $("#image_list");
    var linksSpaces = $listSpaces.find('a');
    var linksPicture = $listPictures.find('a');

    var i, linkSpace,linkPicture, image;
    var imageCache = [];
    var imagesTurned = 0;
    var imageRandom = [];
    var imageCounter = 0;
    var lastImageTurned = 0;
    var lastSpaceTurned = 0;

    for(i = 0; i < linksPicture.length; i++){
        // how many places each picture will appear - it is always two of each picture
        var times = linksSpaces.length / linksPicture.length;
        
        //randomly placing the pictures
        do {
            var place = Math.floor((Math.random() * linksSpaces.length) + 0);
            //if there is an image in that position just get another position
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
        
    }
        
    for(i = 0; i < linksSpaces.length; i++){
        linkSpace = linksSpaces[i];
        
        $(linkSpace).on('click', function(e) {
            e.preventDefault();
            imageCounter = $(this).parent().index();

            swapImage(imageCounter);
        });
        
        function swapImage(count) {
            image = imageCache[count];

            if (lastImageTurned == 0){
                lastImageTurned = image.title;
            }
            
            //if the images are the same, can turn
            if (lastImageTurned == image.title){
                document.getElementById(count+1).src = image.src;
                
                imagesTurned++;
                if (imagesTurned > 1){
                    //another pair will be evaluated
                    lastImageTurned = 0;
                    imagesTurned = 0;
                }
                
                //save the first image turned just in case the next is a wrong one
                lastSpaceTurned = count+1;
            }else {
                //if it's the wrong choice, just turn the actual and the previous one back
                document.getElementById(count+1).src = linkSpace.href;
                document.getElementById(lastSpaceTurned).src = linkSpace.href;
                lastImageTurned = 0;
                imagesTurned = 0;
            }
        }
    }

});
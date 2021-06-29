var images = document.getElementsByTagName('img');
for(var i = 0; i < images.length; i++) {
    var currWidth = images[i].clientWidth;
    var currHeight = images[i].clientHeight;
    images[i].width = currWidth;
    images[i].height = currHeight;
}

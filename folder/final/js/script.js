$(document).ready(function(){

$('img').click(function(){
    // img append random number
    var path = 'img/',
    imgs = ['popup1.jpeg','popup4.jpeg','popup3.jpeg'],
    i = Math.floor(Math.random()*imgs.length);
    $('.el').append("<img src='"+path+imgs[i]+"'>").hide().fadeIn(2000);
});
function randomImg1() {
    var Images1 = new Array();
    Images1[1] = "img/popup1.jpeg";
    Images1[2] = "img/popup3.jpeg";
    Images1[3] = "img/popup4.jpeg";
    var rnd = Math.floor(Math.random() * myImages1.length);
    if (rnd == 0) {
            rnd = 1;
    }
    document.write('<img class="who" src="' + myImages1[rnd] + '">');
}
// function displayimage()
// {
//   alert('hi');
//   var images=[{
//     src: "img/popup1.jpeg"
//     src: "img/popup2.jpeg"
//   }]
// }
});
var random_images_array = ["popup1.jpeg", "popup3.jpeg"];

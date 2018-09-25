console.log('scripts loaded');

var burger = document.getElementById('burger');
var mobileNav = document.getElementById('offscreen-nav');
var closeBtn = document.getElementById('close-btn');
var content = document.getElementById('content');
var moreInfoText = document.getElementById('more-info');
var tooltip = document.getElementById('tooltip');

burger.addEventListener('click', function(){
  console.log('button clicked');
  mobileNav.style.width = '50%';
  mobileNav.style.transition = '0.5s ease';
  content.style.opacity = '.1';
});


closeBtn.addEventListener('click', function(){
  mobileNav.style.width = '0';
  mobileNav.style.transition = '0.5s ease';
  content.style.opacity = '1';
})

moreInfoText.addEventListener('mouseenter', function(event){
  //code goes here
  tooltip.style.opacity = '1';
  var x = event.screenX;
  var y = event.screenY;
  console.log(y);
  tooltip.style.top = y + 'px';


})

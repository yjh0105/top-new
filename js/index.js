window.onload = function(){


var mySwiper = new Swiper ('.swiper-container', {
    //定时器
    autoplayDisableOnInteraction:false,
    autoplay:3000,
  //   effect : 'fade',
  // direction: 'vertical',
  // 循环
  noSwiping : true,
  loop: true,
  // 间隔
  spaceBetween : 20, 
  // 如果需要分页器
//   pagination: '.swiper-pagination',
  
  // 如果需要前进后退按钮
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  
  // 如果需要滚动条
//   scrollbar: '.swiper-scrollbar',
})
 }       

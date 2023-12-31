let sidebar = document.getElementsByClassName("sidebar")[0];
let sidebar_content = document.getElementsByClassName("content-wrapper")[0];

window.onscroll = () => {
  let scrollTop = window.scrollY;
  let viewportHeight = window.innerHeight;
  let sidebarTop = sidebar.getBoundingClientRect().top + window.pageYOffset;
  let contentHeight = sidebar_content.getBoundingClientRect().height;

  if (scrollTop >= contentHeight - viewportHeight + sidebarTop) {
    sidebar_content.style.transform = `translateY(-${(contentHeight - viewportHeight + sidebarTop)}px)`;
    sidebar_content.style.position = "fixed";
  }
  else {
    sidebar_content.style.transform = "";
    sidebar_content.style.position = "";
  }
};


$('document').ready(function(){
  let sidebar = $('.sidebar');
  let sidebar_content =  $('.sidebar .content-wrapper')

  $(window).scroll(function(){
    let scrollTop = $(this).scrollTop();
    let viewportHeight = $(this).height();
    let sidebarTop = sidebar.offset().top; 
    let contentHeight = sidebar_content.height(); 
    if( scrollTop >= contentHeight - viewportHeight + sidebarTop) {
      sidebar_content.css('transform', `translateY(-${(contentHeight - viewportHeight + sidebarTop)}px)`); 
      sidebar_content.css('position', 'fixed'); 
    }
    else {
      sidebar_content.css('transform', ''); 
      sidebar_content.css('position', '');
    }
  });
});
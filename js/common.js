$(function  () {
  $(".cd-header .cd-main-nav").on("click",function (event) {
    if($(event.target).is('.cd-header .cd-main-nav')) $(this).children('ul').toggleClass('is-visible');
  });
  // 向上滚动，显示菜单栏
  var minWidth = 1170;
  if ($(window).width() > minWidth) {
      var navHeight = $(".cd-header").height();
      $(window).on("scroll", {
          previousTop: 0
      },
      function() {
          var scroll_top = $(window).scrollTop();
          // 只要向上滚动scroll_top就会小于previousTop
          scroll_top < this.previousTop ? scroll_top > 0 && $(".cd-header").hasClass("is-fixed") ? $(".cd-header").addClass("is-visible") : $(".cd-header").removeClass("is-visible is-fixed") : ($(".cd-header").removeClass("is-visible"), scroll_top > navHeight && !$(".cd-header").hasClass("is-fixed") && $(".cd-header").addClass("is-fixed")),
          this.previousTop = scroll_top;
      })
  }
})

function chkChinese(str) {
    var regx = /.*[\u4e00-\u9fa5]+.*$/;
    return regx.test(str);
}
function checkUsername(username) {
		if (/^[0-9a-zA-Z_\-.@_]{6,20}$/.test(username)){
			return (true);
		}
		return (false);
}

function checkEmail(email) {
        if (email == '' || !/^[A-Za-z0-9][\w\.\-]+@[\w\.\-]+(\.[\w\.\-]+)+$/.test(email)) {
			return (false);
		}
		return (true);
}

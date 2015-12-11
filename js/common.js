$(function  () {
  $(".cd-header .cd-main-nav").on("click",function (event) {
    if($(event.target).is('.cd-header .cd-main-nav')) $(this).children('ul').toggleClass('is-visible');
  })
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

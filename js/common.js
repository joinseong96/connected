// 메뉴 open/close
$("#header .menu_button").on("click", function () {
  $("nav").stop().toggleClass("on");
  $(this).stop().toggleClass("on");
  $("#header").stop().toggleClass("on");
});

// 메뉴 호버 효과

$("#menu .menu_list").on({
  mouseover: function () {
    $(this).stop().addClass("on");
    $("#menu .menu_list").not($(this)).stop().addClass("not");

    let windowWid = $(window).innerWidth();

    if (windowWid < 768) {
      $(this).children(".sub_menu").stop().slideDown(300);
    } else {
      $(this).children(".sub_menu").stop().fadeIn(300);
    }
  },
  mouseleave: function () {
    $("#menu .menu_list").stop().removeClass("on");
    $("#menu .menu_list").stop().removeClass("not");

    let windowWid = $(window).innerWidth();

    if (windowWid < 768) {
      $(this).children(".sub_menu").stop().slideUp(300);
    } else {
      $(this).children(".sub_menu").stop().fadeOut(300);
    }
  },
});

// 메뉴 내 depth2로 탭 이동하게
$("#menu .sub_menu .depth2").on("click", function () {
  location.hash = $(this)[0].hash;
  window.location.reload();
});

// top 버튼 클릭 시 scroll top
$(".top_button").on("click", function () {
  scroller.scrollTo("top", {
    offset: 0,
    duration: 600,
    easing: [0.25, 0.0, 0.35, 1.0],
    disableLerp: true,
  });
});

// 모달 닫기
$(".modal .close_button, .modal .overlay").on("click", function () {
  $(this).parents(".modal").hide();
  scroller.start();
});

// 에러 모달
function errorSetTimeout() {
  setTimeout(() => {
    $(".modal.error").stop().hide();
  }, 2000);
}

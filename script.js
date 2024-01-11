$(document).ready(function () {
  // search-mobile
  $("header .header-main .mobile-header .mobile-nav .search").click(function () {
    $("header .header-main .searchbar").slideToggle("slow");
  });
  // mens
  $(function () {
    $('header .header-main .desktop-nav .header-bottom .header-bottom-main .right .navigation-menu ul li.men-hover').hover(
      function () {
        $('header .header-main .desktop-nav .mens').fadeIn();
      },
      function () {
        $('header .header-main .desktop-nav .mens').fadeOut();
      }
    );
  });
  //womens
  $("header .header-main .desktop-nav .header-bottom .header-bottom-main .right .navigation-menu ul li.women-hover").hover(function () {
    $("header .header-main .desktop-nav .womens").fadeIn("15000");
  },
    function () {
      $("header .header-main .desktop-nav .womens").fadeOut("10000");
    });
  //The brands
  $("header .header-main .desktop-nav .header-bottom .header-bottom-main .right .navigation-menu ul li.brands-hover").hover(function () {
    $("header .header-main .desktop-nav .the-brands").fadeIn("15000");
  },
    function () {
      $("header .header-main .desktop-nav .the-brands").fadeOut("10000");
    });
  //Local-stores
  $("header .header-main .desktop-nav .header-bottom .header-bottom-main .right .navigation-menu ul li.local-stores-hover").hover(function () {
    $("header .header-main .desktop-nav .Local-stores").fadeIn("15000");
  },
    function () {
      $("header .header-main .desktop-nav .Local-stores").fadeOut("10000");
    });
  //Lookbook
  $("header .header-main .desktop-nav .header-bottom .header-bottom-main .right .navigation-menu ul li.lookbook-hover").hover(function () {
    $("header .header-main .desktop-nav .lookbook").fadeIn("15000");
  },
    function () {
      $("header .header-main .desktop-nav .lookbook").fadeOut("10000");
    });

  // bars-mobile
  $("header .header-main .mobile-header .mobile-nav .bars").click(function () {
    $("header .header-main .mobile-header-nav").slideToggle("slow");
  });
  // bars-menu
  $('li.dropdown > a').on('click', function (event) {
    event.preventDefault();

    var $ul = $(this).parent().find('ul').first();

    $ul.toggle(300);
    $(this).parent().siblings().find('ul').hide(200);

    // Hide menu when clicked outside
    $ul.on('mouseleave', function () {
      $(document).one('click', function () {
        $ul.hide();
      });
      event.stopPropagation();
    });

    event.stopPropagation();
  });

  // Prevent menu from hiding when clicked inside
  $('li.dropdown > ul').on('click', function (event) {
    event.stopPropagation();
  });

  // Hide menu when clicked outside anywhere on the page
  $(document).on('click', function () {
    $('li.dropdown > ul').hide();
  });

  // Tabs
  $('.popular-menu-main .popular-menu ul.tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');
    $('.popular-menu-main .popular-menu ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })
});
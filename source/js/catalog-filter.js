$(document).ready(function () {
    // Sticky catalog filter

    var sidebar = $(".catalog-filter-wrapper"),
        catalogFilter = $('.catalog-filter'),
        sidebarOffset = sidebar.offset().top,
        footerOffset = $('.page-footer').offset().top,
        wHeight = $(window).height();
        catalogFilterUl = $('.catalog-filter__list'),
        headerHeight = $('.page-header').height(),
        catalogFilterUl.css("max-height", wHeight - headerHeight + "px");
        catalogFilter.css("min-height", wHeight - headerHeight + "px");

    $(window).on("orientationchange",function(){
        sidebarOffset = sidebar.offset().top;
        footerOffset = $('.page-footer').offset().top;
        wHeight = $(window).height();
        headerHeight = $('.page-header').height();
        catalogFilterUl.css("max-height", wHeight - headerHeight + "px");
        catalogFilter.css("min-height", wHeight - headerHeight + "px");
    });

    $(window).on("scroll", function () {
        var scrollTop = $(this).scrollTop(),
            footerOffset = $('.page-footer').offset().top,
            sidebarHeight = sidebar.height();

        if (sidebarHeight < (footerOffset)) {

            if (window.matchMedia("(min-width:992px)").matches) {
                if (scrollTop > (sidebarOffset - headerHeight)) {

                    sidebar.addClass('catalog-filter-fixed');
                    $('.catalog-filter').addClass('position-static');

                    if (footerOffset <= (sidebarHeight + scrollTop + headerHeight)) {
                        sidebar.removeClass('catalog-filter-fixed').addClass('catalog-filter-bottom');
                    } else {
                        sidebar.removeClass('catalog-filter-bottom').addClass('catalog-filter-fixed');
                    }

                } else {
                    sidebar.removeClass('catalog-filter-fixed catalog-filter-bottom');
                    $('.catalog-filter').removeClass('position-static');
                }
            }
        } else {
            $('.catalog-filter').removeClass('position-static');
            sidebar.removeClass('catalog-filter-fixed catalog-filter-bottom');
        }
    });
});
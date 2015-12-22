$(document).ready(function () {
    // Sticky catalog filter

    var sidebar = $(".catalog-filter-wrapper"),
        catalogFilter = $('.catalog-filter'),
        sidebarOffset = sidebar.offset().top,
        footerOffset = $('.page-footer').offset().top;

    $(window).on("orientationchange",function(){
        sidebarOffset = sidebar.offset().top;
        footerOffset = $('.page-footer').offset().top;
    });

    $(window).on("scroll", function () {
        var scrollTop = $(this).scrollTop(),
            headerHeight = $('.page-header').height(),
            footerOffset = $('.page-footer').offset().top,
            sidebarHeight = sidebar.height();

        if (sidebarHeight < (footerOffset - headerHeight)) {

            if (window.matchMedia("(min-width:992px)").matches) {
                if (scrollTop > (sidebarOffset)) {

                    sidebar.addClass('catalog-filter-fixed');
                    $('.catalog-filter').addClass('position-static');

                    if (footerOffset <= (sidebarHeight + scrollTop + headerHeight + 100)) {
                        sidebar.removeClass('catalog-filter-fixed').addClass('catalog-filter-bottom');
                    } else {
                        sidebar.removeClass('catalog-filter-bottom').addClass('catalog-filter-fixed');
                    }

                } else {
                    sidebar.removeClass('catalog-filter-fixed');
                    $('.catalog-filter').removeClass('position-static');
                }
            }
        } else {
            $('.catalog-filter').removeClass('position-static');
            sidebar.removeClass('catalog-filter-fixed catalog-filter-bottom');
        }
    });
});
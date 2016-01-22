/*Common JS*/

jQuery(document).ready(function (e) {
    jQuery("#our-brand").owlCarousel({
        autoPlay: !1, 
        items: 3, 
        itemsDesktop: [1024, 3], 
        itemsDesktopSmall: [980, 3], 
        itemsTabletSmall: [768, 2], 
        itemsMobile: [480, 1]
    });
    jQuery(".next").click(function () {
        jQuery("#our-brand").trigger("owl.next");
    });    
    jQuery(".prev").click(function () {
        jQuery("#our-brand").trigger("owl.prev");
    });
    
    jQuery("#media_slide").owlCarousel({ 
        items: 2, 
        itemsDesktop: [1199, 2], 
        itemsDesktopSmall: [900, 2],
        itemsTablet: [800, 1],
        itemsMobile: [767, 1], 
        pagination: !0
    });
    
    jQuery(".ref-link").click(function () {
        if ("" == e("#fullname").val() ? e("#fullname").css("border", "1px solid #F00") : e("#fullname").css("border", "1px solid #323232"), "" == e("#email").val())
            e("#email").css("border", "1px solid #F00");
        else {
            var s = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
            s.test(e("#email").val()) ? e("#email").css("border", "1px solid #323232") : e("#email").css("border", "1px solid #F00")
        }
        return"" == e("#message").val() ? e("#message").css("border", "1px solid #F00") : e("#message").css("border", "1px solid #323232"), "" == e("#fullname").val() || "" == e("#email").val() || "" == e("#message").val() ? !1 : void jQuery.ajax({dataType: "json", type: "POST", url: advent_ajax.ajaxurl, data: {action: "send_message", name: e("#fullname").val(), message: e("#message").val(), email: e("#email").val()}, success: function () {
                jQuery(".success-msg").css("display", "block"), setTimeout(function () {
                    jQuery(".success-msg").css("display", "none")
                }, 2500), jQuery("#homeenquiry").each(function () {
                    this.reset()
                })
            }})
    });


    jQuery('.slider').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 8000,
      mobileFirst: true,
    });
});
    

// $(document).ready(function () {
//     $(".owl-carousel").owlCarousel();
// });
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 36,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3.5
            }
        }
    })
});

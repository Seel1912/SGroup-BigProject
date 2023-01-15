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
            900: {
                items: 2
            },
            1023: {
                items: 2,
            },
            1366: {
                items: 3.5
            }
        }
    })
});

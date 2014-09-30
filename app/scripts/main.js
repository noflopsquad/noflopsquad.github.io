function changeBanner() {
    $('#slow-programming').waypoint(function(direction) {
        $('#banner-image').attr("src", "images/reflect.png");
        console.log(direction);
    });

    $('#no-shadowing').waypoint(function(direction) {
        $('#banner-image').attr("src", "images/transparency.png");
        console.log(direction);
    });
}

$(document).ready(function() {
    changeBanner();
});
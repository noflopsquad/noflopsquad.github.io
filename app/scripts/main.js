function changeBackground(id, path) {
    $(id).waypoint(function() {
        $('#banner-image').attr('src', path);
    });
}

function changeBanner() {
    changeBackground('#team', 'images/logo-banner.png');
    changeBackground('#slow-programming', 'images/reflect.png');
    changeBackground('#no-shadowing', 'images/transparency.png');
}

$(document).ready(function() {
    changeBanner();
});
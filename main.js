$(function () {
    var $header = $("#header");
    var header = ['Welcome','Okaerinasai', 'Ohayō','Konnichiwa', ];
    var position = -1;
    
    !function loop() {
        position = (position + 1) % header.length;
        $header.html(header[position])
        .fadeIn(1000)
        .delay(1500)
        .fadeOut(1000, loop);
    }();
});
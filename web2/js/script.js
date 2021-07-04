var slideSpeed = 150;
$(".box").mouseenter(function (e) {
    var pos = determineDirection($(this), { x: e.pageX, y: e.pageY });
    var par = $(this)
    var cbody = $(this).children('.box-body');

    switch (pos) {
        //up
        case 0:
            cbody.css('top', "" + (-par.height()) + "px").css('left', '0').css('opacity', '1');
            cbody.animate({ top: '0' }, slideSpeed);
            break;
        case 1:
            cbody.css('left', "" + (par.width()) + "px").css('top', '0').css('opacity', '1');
            cbody.animate({ left: '0' }, slideSpeed);
            break;
        //down
        case 2:
            cbody.css('top', "" + (par.height()) + "px").css('left', '0').css('opacity', '1');
            cbody.animate({ top: '0' }, slideSpeed);
            break;
        //left
        case 3:
            cbody.css('left', "" + (-par.width()) + "px").css('top', '0').css('opacity', '1');
            cbody.animate({ left: '0' }, slideSpeed);
            break;
        //right

    }
});

$(".box").mouseleave(function (e) {
    var pos = determineDirection($(this), { x: e.pageX, y: e.pageY });
    var par = $(this)
    var cbody = $(this).children('.box-body');

    switch (pos) {
        //up
        case 0:
            cbody.animate({
                top: "" + (-par.height()) + "px",
            }, slideSpeed,function () { cbody.css('opacity', 0); });
            break;
        case 1:
            cbody.animate({
                left: "" + (par.width()) + "px",
            }, slideSpeed,function () { cbody.css('opacity', 0); });
            break;
        //down
        case 2:
            cbody.animate({
                top: "" + (par.height()) + "px",
            }, slideSpeed,function () { cbody.css('opacity', 0); });
            break;
        //left
        case 3:
            cbody.animate({
                left: "" + (-par.width()) + "px",
            }, slideSpeed,function () { cbody.css('opacity', 0); });
            break;
        //right

    }
});

function determineDirection($el, pos) {
    var w = $el.width(),
        h = $el.height(),
        x = (pos.x - $el.offset().left - (w / 2)) * (w > h ? (h / w) : 1),
        y = (pos.y - $el.offset().top - (h / 2)) * (h > w ? (w / h) : 1);

    return Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180)) / 90 + 3) % 4;
}
var logancopy = ["Jadersity", "Tupress", "Epharturrent", "Confrazzled", "Chrocircasson", "Stictic", "Sampreng", "Micatautived", "Firmand", "Signitined", "Emorts", "Posince", "Glomtom",
    //More here
];

$(document).ready(function() {
    initbutton();
});

function initbutton() {
    $('#generate').on('click', function() {
        cleardisplay();
        speak();
    });
}

function cleardisplay() {
    $('#display').empty();
}

function speak() {
    var num = parseInt($('#num').val());
    var typ = $('#typ').val();
    if (typ === 'w') {
        createwords(num);
    } else if (typ === 's') {
        createsentences(num);
    } else { /*If drop down fails default to paragraphs*/
        createparagraphs(num);
    }
}

function createsentences(n) {
    for (var i = 0; i <= (n - 1); i++) {
        var r = Math.floor(Math.random() * logancopy.length);
        var sent = '<span onclick="deleteWord($(this))" class="wrd">' + logancopy[r] + '</span>';
        $('#display').append(sent);
        setCookie('display', $('#display').html(), 1);
    }
}

function deleteWord(w) {
    var del = $('#display_deleted');
    var new_w = w.clone();
    new_w.removeAttr('onclick');
    new_w.attr('onclick', "addBack($(this))");
    del.append(new_w);
    w.remove();
    setCookie('display', $('#display').html(), 1);
}

function addBack(w) {
    var new_w = w.clone();
    new_w.removeAttr('onclick');
    new_w.attr('onclick', "deleteWord($(this))");
    $('#display').append(new_w);
    w.remove();
    setCookie('display', $('#display').html(), 1);
}

function setCookie(name, value, daysToLive) {
    var cookie = name + "=" + encodeURIComponent(value);
    if (typeof daysToLive === "number") {
        cookie += "; max-age=" + (daysToLive * 24 * 60 * 60);
        document.cookie = cookie;
    }
}

function getCookie(name) {
    var cookieArr = document.cookie.split(";");
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if (name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }

    // Return null if not found
    return null;
}

function pageRefresh() {
    if (getCookie('display')) {
        $("#display").html(getCookie('display'));
    }
}
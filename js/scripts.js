$(function () {
    $('#example').okzoom({
        width: 200,
        height: 200,
        border: "1px solid black",
        shadow: "0 0 5px #000"
    });


    $("a[href^='#']").on("click", function (e) {
        e.preventDefault();
        var hash = this.hash;
        if (hash.length == 0) return;
        $("html, body").animate(
            { scrollTop: $(hash).offset().top },
            1000,
            function () {
                window.location.hash = hash;
            }
        );
    });
});

var buttons = document.querySelectorAll('.ruler button');
buttons.forEach(function(btn) {
    btn.onclick = function() {
        if (this.classList.contains('disable')) return;
        removeActive(buttons);
        this.classList.add('active');
    }
})

var tabsHtml = document.querySelector('.tabs');
var container = document.querySelector('.thirdSection .transform');
tabsHtml.onmouseenter = function () {
    container.classList.add('in');
}
tabsHtml.onmouseleave = function () {
    container.classList.remove('in');

}

var tabsArray = document.querySelectorAll('.tabs .tab');
tabsArray.forEach(function(tab) {
    tab.onclick = function() {
        removeActive(tabsArray);
        this.classList.add('active');
    }
    
})

function removeActive(elements) {
    elements.forEach(function (elem) {
        elem.classList.remove('active');
    })
}


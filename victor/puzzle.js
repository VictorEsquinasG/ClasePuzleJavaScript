




window.addEventListener("onload", function () {
    var puzles = this.document.querySelectorAll('div.puzzle');
    var long = puzles.length;
    for (let i = 0; i < long; i++) {
        puzles[i].editable();
    }
});
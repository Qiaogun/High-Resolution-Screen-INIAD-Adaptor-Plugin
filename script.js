function changewidth() {
    if (document.documentElement.clientWidth > 1000) {
        var new_pad_block = document.getElementsByClassName("pad-block");
        new_pad_block[0].style.marginLeft = 7 + "em";
        new_pad_block[0].style.marginRight = 7 + "em";
    }
}
changewidth()

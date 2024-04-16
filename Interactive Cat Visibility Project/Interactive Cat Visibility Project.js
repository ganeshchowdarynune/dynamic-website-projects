function switchOn() {
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("SwitchStatus").textContent = "Switched On";
    document.getElementById("onstwich").style.backgroundColor = "#22c55e";
    document.getElementById("offstwich").style.backgroundColor = "#cdd2d9";
}

function switchOff() {
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("SwitchStatus").textContent = "Switched Off";
    document.getElementById("offstwich").style.backgroundColor = "#e12d39";
    document.getElementById("onstwich").style.backgroundColor = "#cdd2d9";

}
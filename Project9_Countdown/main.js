function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerhtml = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Times Up!");
            clearTimeout(time);
            timer.innerhtml = "";
        }
    }
    tick();
}
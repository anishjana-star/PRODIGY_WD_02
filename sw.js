let h=0;
let m=0;
let s=0;
let ms=0;
let stopTime=true;

function startTimer(){
    if(stopTime == true){
        stopTime = false;
        startOn();
    }
}

function startOn(){
    if(stopTime == false){
        ms = parseInt(ms);
        s = parseInt(s);
        m = parseInt(m);
        h = parseInt(h);

        ms = ms + 1;
        if (ms == 100){
            s = s + 1;
            ms = 0;
        }

        // s = s + 1;
        if (s == 60){
            m = m + 1;
            s = 0;
        }
        if (m == 60){
            h = h + 1;
            m = 0;
        }

        if(h < 10){
            h = "0" + h;
        }

        if(m < 10){
            m = "0" + m;
        }

        if(s < 10){
            s = "0" + s;
        }
        if(ms < 10){
            ms = "0" + ms;
        }

        // var startTime = Date.now();

        // var interval = setInterval(function() {
        // var elapsedTime = Date.now() - startTime;
        // document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(3);
        // }, 100);

        document.getElementById('stopwatch').innerText = h + ':' + m + ':' + s + ':' + ms;
        setTimeout("startOn()",10);
    }
}

function stopTimer(){
    if(stopTime == false){
        stopTime = true;
    }
}

function resetTimer(){
    document.getElementById('stopwatch').innerText = "00:00:00:00";
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
    stopTime = true;
}
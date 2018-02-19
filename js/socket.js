var websock;

function start() 
{
    websock = new WebSocket('ws://' + window.location.hostname + '/ws');
    websock.onopen = function(evt) {
        console.log('websock open');
        $("#conStatus").addClass("color-green");
        $("#conStatus").text("Connected");
    };
    websock.onclose = function(evt) {
        console.log('websock close');
        $("#conStatus").removeClass("color-green");
        $("#conStatus").addClass("color-red");
        $("#conStatus").text("Error / No Connection");
    };
    websock.onerror = function(evt) {
        console.log(evt);
        $("#conStatus").removeClass("color-green");
        $("#conStatus").addClass("color-red");
        $("#conStatus").text("Error / No Connection");
    };
    }
document.addEventListener("DOMContentLoaded", function() {
    const logdiv = document.getElementById("log");
    const stateDiv = document.getElementById("state");
    const startBtn = document.getElementById("start");
    const stopBtn = document.getElementById("stop");

    startBtn.addEventListener("click", () => {
        document.addEventListener("keydown", handledown);
        document.addEventListener("keyup", handleup);
        startBtn.disabled = true;
        stopBtn.disabled = false;
    });

    stopBtn.addEventListener("click", () => {
        document.removeEventListener("keydown", handledown);
        document.removeEventListener("keyup", handleup);
        logdiv.textContent = "";
        stateDiv.textContent = "";
        startBtn.disabled = false;
        stopBtn.disabled = true;
    });

    function handledown(e) {
        logdiv.textContent = `key ${e.key} pressed down`;
        stateDiv.textContent = "Key is down";
    }

    function handleup(e) {
        logdiv.textContent = `key ${e.key} released`;
        stateDiv.textContent = "Key is up";
    }
});
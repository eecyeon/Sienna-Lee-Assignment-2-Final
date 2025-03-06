document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("checkbox");
    const robotContainer = document.querySelector(".robot-container");
    const inputcaptcha = document.querySelector(".input-captcha");
    const selectioncontainer = document.querySelector(".selection-container");
    const selectioncontainerlabel = document.querySelector(".selection-container label");
    const writingblock = document.querySelector(".writing-block");
    const writingblocktextarea = document.querySelector(".writing-block textarea");
    const timercontainer = document.getElementById("timer-container");
    const timerdisplay = document.getElementById("timer");
    const overallcontainer = document.querySelector(".overall-container");


let timerInterval;
    let timerStarted = false;

function startTimer(duration) {
    let timeLeft = duration;

    function updateTimer() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerdisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (timeLeft > 0) {
            timeLeft--;
        } else {
            clearInterval(timerInterval);
            timerdisplay.textContent = "TIME'S UP!";
            timerdisplay.style.color = "red";
            writingblocktextarea.style.backgroundColor = "red";
            writingblocktextarea.disabled = true; 
        }
    }

    clearInterval(timerInterval);
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

    

    checkbox.addEventListener("change", function () {
        if (this.checked) {
            robotContainer.classList.add("expand");
            inputcaptcha.classList.add("move-left");
            selectioncontainer.style.maxHeight = "120px";
            selectioncontainer.style.opacity = "1";
            selectioncontainerlabel.style.opacity = "1";
            writingblock.classList.add("expand");
            writingblocktextarea.classList.add("expand");
            overallcontainer.classList.add ("expand");
            timercontainer.style.opacity = "1";
            timercontainer.style.maxHeight = "20px";

            writingblocktextarea.style.backgroundColor = "lightgray";
            timerdisplay.textContent = "00:05";
            timerStarted = false;

            setTimeout(() => {
                writingblocktextarea.addEventListener("focus", function () {
                    if (!timerStarted) {
                        startTimer(5);
                        writingblocktextarea.style.transition = "background-color 5s linear";
                        writingblocktextarea.style.backgroundColor = "red";
                        timerStarted = true;
                    }
                });
            }, 2000);
        } else {
        robotContainer.classList.remove("expand");
        inputcaptcha.classList.remove("move-left");
        selectioncontainer.style.maxHeight = "none";
        selectioncontainer.style.opacity = "0";
        selectioncontainerlabel.style.opacity = "0";
        writingblock.classList.remove("expand");
        writingblocktextarea.classList.remove("expand");
        overallcontainer.classList.remove ("expand");
        timercontainer.style.opacity = "0";
        timercontainer.style.maxHeight = "0";

        clearInterval(timerInterval);
        timerdisplay.textContent = "00:00";
        writingblocktextarea.style.backgroundColor = "lightgray";
        timerStarted = false;
        }
    });
});


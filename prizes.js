function triggerPrize() {
    if (localStorage.getItem("hasSpun") !== "true") {
        return;
    }

    let randomValue = Math.random();
    determinePrize(randomValue);
}

function determinePrize(value) {
    let prizeMessage = "";
    let showImage = false;

    if (value < 0.1) {  
        prizeMessage = "🎁 انا احلى هدية ";
        showImage = true;
    } else if (value < 0.2) {
        prizeMessage = "😅🤣 كان بدي أعطيك شي… بس الميزانية تحت الصفر";
    } else if (value < 0.3) {
        prizeMessage = "😁 حظ أوفر في المرة القادمة";
    } else if (value < 0.4) {
        prizeMessage = "😁 حظ أوفر في المرة القادمة";
    } else if (value < 0.5) {
        prizeMessage = "😁 ربحت… لا لا آسف، غلطان في الاسم";
    } else if (value < 0.6) {
        prizeMessage = "شايفني معي مصاري لأعطيك؟";
    } else if (value < 0.7) {
        prizeMessage = "جائزتك في الطريق… بس السائق ضيعها ";
    } else if (value < 0.8) {
        prizeMessage = "💰 ربحت 100$ اذهب وابحث عنها تحت برج إيفل!";
    } else if (value < 0.9) {
        prizeMessage = "💰 ربحت 1000$، ستأخذ المبلغ في 2025/5/32";
    } else {
        prizeMessage = "😁 حظ أوفر في المرة القادمة";
    }

    showPrize(prizeMessage, showImage);
}

function showPrize(message, showImage) {
    let prizeDisplay = document.getElementById("prize-display");
    let prizeText = document.getElementById("prize-text");
    let prizeImage = document.getElementById("prize-image");

    prizeText.innerText = message;
    prizeImage.style.display = showImage ? "block" : "none";

    prizeDisplay.classList.remove("hidden");
    prizeDisplay.style.display = "block";

    prizeDisplay.addEventListener("click", function () {
        prizeDisplay.classList.add("hidden");
    });
}

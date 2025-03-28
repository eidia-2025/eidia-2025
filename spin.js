document.getElementById("spin-button").addEventListener("click", function () {
    if (localStorage.getItem("hasSpun") === "true") {
        alert("لقد استخدمت فرصتك بالفعل! 🎉");
        return;
    }

    let wheel = document.getElementById("wheel");
    let minSpins = 5;
    let maxExtraDegrees = 360;
    let finalDegree = (minSpins * 360) + Math.floor(Math.random() * maxExtraDegrees);

    wheel.style.transition = "transform 5s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
    wheel.style.transform = `rotate(${finalDegree}deg)`;

    setTimeout(() => {
        localStorage.setItem("hasSpun", "true"); 
        triggerPrize(); 
    }, 6000); 
});

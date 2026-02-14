document.addEventListener("DOMContentLoaded", function () {

    const envelope = document.getElementById("envelope");
    const mainContent = document.getElementById("mainContent");
    const envelopeContainer = document.getElementById("envelopeContainer");
    const music = document.getElementById("bg-music");
    music.load();

    envelope.addEventListener("click", () => {

    // 🎵 Play instantly
    music.currentTime = 0;
    music.play().catch(error => console.log(error));

    // 💌 Animate flap
    document.querySelector(".flap").style.transform = "rotateX(180deg)";

    setTimeout(() => {
        envelopeContainer.style.display = "none";
        mainContent.style.display = "block";
        startTypewriter();
        startHearts();
    }, 100);

});
    

    // 💖 Typewriter
    const messageText = `To my chaos twin 🤭💘

You are the only person who matches my energy at 2am, supports my unhinged ideas, and still says "let's do it" 😭💅✨  

Thank you for the uncontrollable laughter, the random plans, the deep talks, and the "I got you no matter what" energy. 🌸💗  

Our friendship feels like sunshine mixed with glitter and a little bit of madness — and I wouldn’t change it for the world. 🌞💞  

Stay loud, stay soft, stay YOU.  
Happy Galentine’s Day to my partner in crime forever 💖👑💫`;



    function startTypewriter() {
        let i = 0;
        const speed = 40;
        const typewriter = document.getElementById("typewriter");

        function typing() {
            if (i < messageText.length) {
                typewriter.innerHTML += messageText.charAt(i);
                i++;
                setTimeout(typing, speed);
            }
        }
        typing();
    }

    // 🌸 Floating Hearts
    function startHearts() {
        setInterval(() => {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "💖";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.fontSize = Math.random() * 20 + 15 + "px";
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 6000);
        }, 500);
    }

    // 📸 Modal
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const images = document.querySelectorAll(".gallery img");
    const closeBtn = document.querySelector(".close");

    images.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    closeBtn.onclick = () => modal.style.display = "none";

});

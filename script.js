const showImage = document.getElementById("showImage");
const questionText = document.getElementById("question");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const noImages = [
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png"
]
const noTexts = [
    "达咩~",
    "点这我会伤心",
    "求你别点",
    "再想想吧",
    "不要啊！",
    "真的吗？"
];

let name = ''
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
name = params.get('name') ? params.get('name') : ''
questionText.textContent += ` ${name}`;

let clickCount = 0;

noButton.addEventListener("click", function () {
    clickCount += 1;
    if (clickCount <= 6) {
        showImage.src = noImages[clickCount - 1]
        noButton.innerText = noTexts[clickCount - 1];
    }
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;
    let moveUp = clickCount * 25;
    showImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

});

yesButton.addEventListener("click", function () {
    document.body.innerHTML = `
        <div class="yes-wrapper">
            <p class="yes-text">爱你哟~！</p>
            <img src="8.png" alt="开心" class="yes-image">
        </div>
    `;
});
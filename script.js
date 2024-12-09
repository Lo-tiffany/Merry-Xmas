document.addEventListener("DOMContentLoaded", () => {
    const startMusicButton = document.getElementById("start-music");
    const backgroundMusic = document.getElementById("background-music");
    const messagePart1 = document.getElementById("message-part1");
    const messagePart2 = document.getElementById("message-part2");

    // 點擊按鈕播放音樂並顯示文字
    startMusicButton.addEventListener("click", () => {
        // 播放背景音樂
        backgroundMusic.play();

        // 隱藏按鈕
        startMusicButton.style.display = "none";

        // 延遲顯示第一段文字
        setTimeout(() => {
            messagePart1.classList.remove("hidden");
            messagePart1.classList.add("visible");
        }, 1000);

        // 延遲顯示第二段文字
        setTimeout(() => {
            messagePart1.classList.add("hidden");
            messagePart2.classList.remove("hidden");
            messagePart2.classList.add("visible");
        }, 4000);
    });
});

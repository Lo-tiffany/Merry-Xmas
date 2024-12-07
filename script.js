document.addEventListener("DOMContentLoaded", () => {
    const messagePart1 = document.getElementById("message-part1");
    const messagePart2 = document.getElementById("message-part2");

    // 顯示「你今天的小禮物在」
    setTimeout(() => {
        messagePart1.classList.remove("hidden");
        messagePart1.classList.add("visible");
    }, 3000);

    // 隱藏「你今天的小禮物在」，顯示「公園」
    setTimeout(() => {
        messagePart1.classList.add("hidden");
        messagePart2.classList.remove("hidden");
        messagePart2.classList.add("visible");
    }, 6000);
});

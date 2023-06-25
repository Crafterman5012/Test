document.querySelector(".burger").addEventListener("click",() => {
    document.querySelector(".burmenu").style.display = "flex";
});

document.querySelector(".burclose").addEventListener("click",() => {
    document.querySelector(".burmenu").style.display = "none";
});
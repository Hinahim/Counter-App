let num = document.querySelector("#heading1");
let btnInc = document.querySelector(".btn");
let btnDec = document.querySelector(".btn1");
let btnRes = document.querySelector(".btn2");
let count = 0;
btnInc.addEventListener("click", function () {
    count++;
    num.textContent = count;
});
btnDec.addEventListener("click", function () {
    count--;
    num.textContent = count;
});
btnRes.addEventListener("click", function () {
    count = 0;
    num.textContent = count;
});

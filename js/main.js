let billInput = document.getElementById("bill");
let peopleInput = document.getElementById("people");
let amountVal = document.querySelector(".amountVal");
let totalVal = document.querySelector(".totalVal");
let tipInput = document.querySelectorAll(".tip");
let tipArray = Array.from(tipInput);
let customInput = document.querySelector(".custom");
let reset = document.getElementById("reset");

billInput.value = "0.0";
peopleInput.value = "1";
amountVal.innerHTML = "$" + (0.0).toFixed(2);
totalVal.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

billInput.addEventListener("input", billInputFunc);
peopleInput.addEventListener("input", peopleInputFunc);
reset.addEventListener("click", resetFunc);
customInput.addEventListener("input", customInputFunc);

function customInputFunc() {
    let customValue = parseFloat(customInput.value);
    tipValue = customValue / 100;
    if (!isNaN(tipValue)) {
        calculate();
    } else {
        tipValue = "";
    }
}

tipArray.forEach((tip) => {
    tip.addEventListener("click", function (e) {
        tipArray.forEach((e) => {
            e.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        tipValue = parseFloat(tip.innerHTML) / 100;
        calculate();
        console.log(tipValue);
    });
})

function billInputFunc() {
    billValue = parseFloat(billInput.value);
    if (!isNaN(billValue)) {
        calculate();
    } else {
        billValue = "";
    }
}

function peopleInputFunc() {
    peopleValue = parseFloat(peopleInput.value);
    if (peopleValue == 0) {
        peopleInput.parentNode.classList.add("error");
    } else if (!isNaN(peopleValue)) {
        peopleInput.parentNode.classList.remove("error");
        calculate();
    }

}

function calculate() {
    if (peopleValue >= 1) {
        let tipAmount = (billValue / peopleValue) * tipValue;
        amountVal.innerHTML = "$" + (tipAmount).toFixed(2);
        let total = (billValue / peopleValue) + tipAmount;
        totalVal.innerHTML = "$" + (total).toFixed(2);
    }
}

function resetFunc() {
    billInput.value = "0.0";
    peopleInput.value = "1";
    amountVal.innerHTML = "$" + (0.0).toFixed(2);
    totalVal.innerHTML = "$" + (0.0).toFixed(2);
    customInput.value = "";
}
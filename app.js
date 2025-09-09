const tariff = Array.from(document.querySelectorAll(".tariff"));
const option = Array.from(document.querySelectorAll(".option"));
const time = document.querySelector("#time");
const volume = document.querySelector("#volume");
const total = document.querySelector("#total");

const orderTariff = document.querySelector("#order_tariff");
const orderTime = document.querySelector("#order_time");
const orderOption = document.querySelector("#order_option");

tariff.forEach((el) => {
  el.addEventListener("click", tariffUpdate);
});

time.addEventListener("input", timeUpdate);

option.forEach((el) => {
  el.addEventListener("change", optionUpdate);
});

function tariffUpdate(e) {
  currentSet.tariff = e.target.id;
  updatePrice();
  orderUpdate();
}

function timeUpdate(e) {
  currentSet.time = time.value;
  volume.value = currentSet.time;
  updatePrice();
  orderUpdate();
}

function optionUpdate(e) {
  e.stopPropagation();
  if (e.target.checked) {
    currentSet.option.push(e.target.id);
  } else {
    let index = currentSet.option.indexOf(e.target.id);
    currentSet.option.splice(index, 1);
  }
  updatePrice();
  orderUpdate();
}

function updatePrice() {
  let tariffPrice = currentSet.getTariffPrice();
  let optionPrice = currentSet.getOptionPrice();
  let totalPrice = currentSet.time * tariffPrice + optionPrice;
  total.value = totalPrice;
}

function orderUpdate() {
  if (currentSet.time < 5) {
    orderTime.value = currentSet.time + " метр";
  } else {
    orderTime.value = currentSet.time + " метров";
  }
  orderTariff.value = currentSet.getTariffPrice() + " \u{20B8}/м2";
  orderOption.value = currentSet.getOptionPrice() + " \u{20B8}";
}

const priceInfo = {
    tariff: {
      economy: 300,
      comfort: 600,
      business: 700,
      premium: 800,
      premium2: 1250,
    },
    option: {
      option1: 7000,
      option2: 4000,
      option3: 5000,
      option4: 4000,
      option5: 5000,
      option6: 5000,
      option7: 4000,
    },
  };
  
  let currentSet = {
    tariff: "comfort",
    metr: 20,
    option: [],
    getTariffPrice() {
      return priceInfo.tariff[this.tariff];
    },
    getOptionPrice() {
      let optionPrice = 0;
      if (!this.option.length == 0) {
        this.option.forEach((el) => {
          optionPrice += priceInfo.option[el];
        });
      }
      return optionPrice;
    },
  };





const contact_btn = document.querySelector('.contact-btn');
const close_btn = document.querySelector('.close-btn');
const contact_container = document.querySelector('.contact-container');
contact_btn.addEventListener('click', () => {
    contact_container.classList.toggle('visible')
});
close_btn.addEventListener('click', () => {
    contact_container.classList.remove('visible')
});
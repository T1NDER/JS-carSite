const filterItems = document.querySelectorAll(".cars-filter li");
const carItems = document.querySelectorAll(".car");
const carsContent = document.getElementById("cars-content");

filterItems.forEach((item) => {
  item.onclick = () => {
    filterItems.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");

    const filterText = item.textContent.toLowerCase();

    carItems.forEach((car) => {
      if (
        filterText === "все марки" ||
        car.querySelector("h4").textContent.toLowerCase().includes(filterText)
      ) {
        car.style.display = "flex";
      } else {
        car.style.display = "none";
      }
    });

    carsContent.scrollIntoView({ behavior: "instant" });
  };
});

const formFields = [
  document.getElementById("car"),
  document.getElementById("name"),
  document.getElementById("phone"),
];

document.getElementById("order-action").addEventListener("click", function () {
  let isFormValid = true;

  formFields.forEach((field) => {
    if (field.value.trim() === "") {
      field.style.borderColor = "red";
      isFormValid = false;
    } else {
      field.style.borderColor = "white";
    }
  });

  const phoneField = document.getElementById("phone");
  if (phoneField.value.trim().length < 10) {
    phoneField.style.borderColor = "red";
    isFormValid = false;
  }

  if (isFormValid) {
    alert("Спасибо за заявку! Мы скоро свяжемся с вами");
    formFields.forEach((field) => (field.value = ""));
  }
});


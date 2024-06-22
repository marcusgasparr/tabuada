//Elements
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicatorTitle = document.querySelector("#multiplication-title");
const multiplicationTable = document.querySelector("#multiplication-operation");

//Functions
const createTable = (number, multiplicatorNumber) => {
  multiplicationTable.innerHTML =
    "<span style='margin-bottom: 1rem;'>A multiplicação do " +
    numberInput.value +
    " até " +
    multiplicationInput.value +
    " é:</span>";

  for (i = 0; i <= multiplicatorNumber; i++) {
    const result = number * i;
    const templateResult = `
      <div class="row">
        <div class="operation">${number} x ${i} = </div>
        <div class="result">${result}</div>
      </div>
    `;
    
    const parser = new DOMParser();
    const htmlTemplate = parser.parseFromString(templateResult, "text/html");
    const row = htmlTemplate.querySelector(".row");
    multiplicationTable.appendChild(row);
  }

  multiplicatorTitle.innerHTML = "Confira o Resultado:";
};

//Events
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberInput.value;

  const multiplicatorNumber = +multiplicationInput.value;

  if (!multiplicationForm || !multiplicatorNumber) return;

  createTable(multiplicationNumber, multiplicatorNumber);
});

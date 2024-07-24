// Check if a input is empty or not if empty return true else return false
const checkIfEmpty = function checkIfInputIsEmpty(input) {
  if (input.trim() === "") {
    return true;
  }
  return false;
};

// Check if input contains any numbers
const checkIfContainsNumbers = function checkIfInputContainsNumbers(input) {
  return /\d/.test(input);
};

// Check if input contains letters
const checkIfContainsLetters = function checkIfInputContainsLetters(input) {
  return /[a-zA-Z]/.test(input);
};

// Check if date format is correct month > current month and year > current year
const checkIfDateFormatIsCorrect = function checkIfDateFormatIsCorrect() {
  const date = document.getElementById("expdate").value;
  const year = document.getElementById("expyear").value;

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() - 2000;
  const currentMonth = currentDate.getMonth() + 1;

  if (year < currentYear) {
    return true;
  } else if (year == currentYear && date < currentMonth) {
    return true;
  }

  return false;
};

// Displays the number on the card image
const inputCardNumber = function formatInputOnTheCard(event) {
  let input = event.target.value.replace(/\s+/g, "");

  const format = ["0000", "0000", "0000", "0000"];
  for (let i = 0; i < input.length; i++) {
    if (i < format.length * 4) {
      const charIndex = i % 4;
      format[Math.floor(i / 4)] =
        format[Math.floor(i / 4)].substr(0, charIndex) +
        input[i] +
        format[Math.floor(i / 4)].substr(charIndex + 1);
    }
  }

  const formattedInput = format.join(" ");

  document.getElementById("formattedCardNumber").textContent = formattedInput;
};
// prettier-ignore
document.getElementById("cardnumber").addEventListener("input", inputCardNumber);

// Format the code into 4 subsections with space in between
const inputCardFormatter = function formatInputIntoEachSubsection(event) {
  let input = event.target.value;

  input = input.replace(/\s+/g, "");
  const formattedInput = input.replace(/(.{4})/g, "$1 ").trim();

  event.target.value = formattedInput;
};
// prettier-ignore
document.getElementById("cardnumber").addEventListener("input", inputCardFormatter);

// Displays the cvc number on the card image
const inputCvcNumber = function formatCvcNumberOnCard(event) {
  let input = event.target.value;

  const format = ["000"];
  for (let i = 0; i < input.length; i++) {
    if (i < format.length * 3) {
      const charIndex = i % 3;
      format[0] =
        format[0].substr(0, charIndex) +
        input[i] +
        format[0].substr(charIndex + 1);
    }
  }

  const formattedInput = format.join(" ");

  document.getElementById("formattedCvcNumber").textContent = formattedInput;
};
// prettier-ignore
document.getElementById("cvc").addEventListener("input", inputCvcNumber);

// Display error message when a field is empty
const displayErrorMessage = function displayErrorMessageWhenBlank(
  event,
  errorContainerId,
) {
  const container = document.getElementById(errorContainerId);

  if (checkIfEmpty(event.target.value)) {
    event.target.style.border = "1px solid red";

    if (container.children.length > 0) {
      container.removeChild(container.children[0]);
    }

    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Can't be blank";
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "0.8rem";

    container.appendChild(errorMessage);
  }
};
// prettier-ignore
document.getElementById("cardholder").addEventListener("blur", (event) => {
  displayErrorMessage(event, "error-container-cardholder")
});
// prettier-ignore
document.getElementById("cardnumber").addEventListener("blur", (event) => {
  displayErrorMessage(event, "error-container-cardnumber")
});
// prettier-ignore
document.getElementById("cvc").addEventListener("blur", (event) => {
  displayErrorMessage(event, "error-container-cvc")
})

// Display error message when a field is empty for expiry date
const displayErrorMessageForExpDate = function displayErrorMessageForExpDate() {
  const dateField = document.getElementById("expdate");
  const yearField = document.getElementById("expyear");
  const container = document.getElementById("error-container-exp");

  if (checkIfEmpty(dateField.value) || checkIfEmpty(yearField.value)) {
    dateField.style.border = "1px solid red";
    yearField.style.border = "1px solid red";

    if (container.children.length > 0) {
      container.removeChild(container.children[0]);
    }

    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Can't be blank";
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "0.8rem";

    container.appendChild(errorMessage);
  }
};
// prettier-ignore
document.getElementById("expdate").addEventListener("blur", displayErrorMessageForExpDate);
// prettier-ignore
document.getElementById("expyear").addEventListener("blur", displayErrorMessageForExpDate);

// Removes error messages from the input fields
const removeErrorMessage = function removeErrorMessageWhenNotBlank(
  event,
  inputId,
  errorContainerId,
) {
  const container = document.getElementById(errorContainerId);
  const input = document.getElementById(inputId);

  if (!checkIfEmpty(event.target.value)) {
    input.style.border = "1px solid black";

    if (container.children.length > 0) {
      container.removeChild(container.children[0]);
    }
  }
};
// prettier-ignore
document.getElementById("cardholder").addEventListener("input", (event) => {
  removeErrorMessage(event, "cardholder", "error-container-cardholder");
});
// prettier-ignore
document.getElementById("cardnumber").addEventListener("input", (event) => {
  removeErrorMessage(event, "cardnumber", "error-container-cardnumber");
});
// prettier-ignore
document.getElementById("cvc").addEventListener("input", (event) => {
  removeErrorMessage(event, "cvc", "error-container-cvc");
});

// Removes the error message for the expiration date
const removeErrorMessageForExpDate = function removeErrorMessageForExpDate() {
  const dateField = document.getElementById("expdate");
  const yearField = document.getElementById("expyear");
  const container = document.getElementById("error-container-exp");

  if (!checkIfEmpty(dateField.value) && !checkIfEmpty(yearField.value)) {
    dateField.style.border = "1px solid black";
    yearField.style.border = "1px solid black";

    if (container.children.length > 0) {
      container.removeChild(container.children[0]);
    }
  }
};
// prettier-ignore
document.getElementById("expdate").addEventListener("input", removeErrorMessageForExpDate);
// prettier-ignore
document.getElementById("expyear").addEventListener("input", removeErrorMessageForExpDate);

// Display error message when the cardholder name contains numbers
const displayErrorMessageForCardholder =
  function displayErrorMessageForCardholder() {
    const cardholder = document.getElementById("cardholder");
    const container = document.getElementById("error-container-cardholder");

    if (checkIfContainsNumbers(cardholder.value)) {
      cardholder.style.border = "1px solid red";

      if (container.children.length > 0) {
        container.removeChild(container.children[0]);
      }

      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Wrong format, letters only";
      errorMessage.style.color = "red";
      errorMessage.style.fontSize = "0.8rem";

      container.appendChild(errorMessage);
    }
  };
// prettier-ignore
document.getElementById("cardholder").addEventListener("input", displayErrorMessageForCardholder);

// Display error message when the card number contains letters
const displayErrorMessageForCardNumber =
  function displayErrorMessageForCardNumber() {
    const cardNumber = document.getElementById("cardnumber");
    const container = document.getElementById("error-container-cardnumber");

    if (checkIfContainsLetters(cardNumber.value)) {
      cardNumber.style.border = "1px solid red";

      if (container.children.length > 0) {
        container.removeChild(container.children[0]);
      }

      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Wrong format, numbers only";
      errorMessage.style.color = "red";
      errorMessage.style.fontSize = "0.8rem";

      container.appendChild(errorMessage);
    }
  };
// prettier-ignore
document.getElementById("cardnumber").addEventListener("input", displayErrorMessageForCardNumber);

// Only allow numbers to be inputted in the card number field
const onlyAllowNumbers = function onlyAllowNumbersInCardNumber(event) {
  if (!/\d/.test(event.key)) {
    event.preventDefault();
  }
};
// prettier-ignore
document.getElementById("expdate").addEventListener("keypress", onlyAllowNumbers);
// prettier-ignore
document.getElementById("expyear").addEventListener("keypress", onlyAllowNumbers);
// prettier-ignore
document.getElementById("cvc").addEventListener("keypress", onlyAllowNumbers);

// Display error message when the date format is incorrect
const displayErrorMessageForDateFormat = function displayErrorMessageForDateFormat() {
  const dateField = document.getElementById("expdate");
  const yearField = document.getElementById("expyear");
  const container = document.getElementById("error-container-exp");

  if (checkIfDateFormatIsCorrect()) {
    dateField.style.border = "1px solid red";
    yearField.style.border = "1px solid red";

    if (container.children.length > 0) {
      container.removeChild(container.children[0]);
    }

    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Invalid date";
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "0.8rem";

    container.appendChild(errorMessage);
  }
};
// prettier-ignore
document.getElementById("expdate").addEventListener("input", displayErrorMessageForDateFormat);
// prettier-ignore
document.getElementById("expyear").addEventListener("input", displayErrorMessageForDateFormat);

// Display error message when date only contains 1 number
const displayErrorMessageForDate = function displayErrorMessageForDate(event) {
  const container = document.getElementById("error-container-exp");

  if (event.target.value.length === 1) {
    event.target.style.border = "1px solid red";

    if (container.children.length > 0) {
      container.removeChild(container.children[0]);
    }

    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Invalid date";
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "0.8rem";

    container.appendChild(errorMessage);
  }
};
// prettier-ignore
document.getElementById("expdate").addEventListener("input", displayErrorMessageForDate);
// prettier-ignore
document.getElementById("expyear").addEventListener("input", displayErrorMessageForDate);

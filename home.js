// w html musisz dodać: <p id="errorParagraph"></p>
const validateForm = () => {
  const errorParagraph = document.getElementById("errorParagraph");
  // wymagane pola trzeba uzupełnić, to tylko przykład
  const requiredFieldsIds = ["location", "sector", "description", "email"];

  const erroredFileds = requiredFieldsIds.map((fieldId) => {
    if (!document?.getElementById(fieldId).value) return fieldId;
  });

  if (erroredFileds.length > 0) {
    const erroredFiledsNames = erroredFileds.join(", ");

    errorParagraph.textContent = `${erroredFiledsNames} fields are required. Complete them before submitting the form.`;
  } else {
    return true;
  }
};

const handleSubmitForm = (e) => {
  e.preventDefault();
  const location = document.getElementById("location").value;
  const sector = document.getElementById("sector").value;
  const description = document.getElementById("description").value;
  const budget = document.getElementById("budget").value;
  const budgetOne = document.getElementById("budgetOne").value;
  const budgetTwo = document.getElementById("budgetTwo").value;
  const budgetThree = document.getElementById("budgetThree").value;
  const file = document.getElementById("file").value;
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const checkbox = document.getElementById("checkbox").value;

  const payload = {
    location: location,
    sector: sector,
    description: description,
    budget: budget,
    budget_one: budgetOne,
    budget_two: budgetTwo,
    budget_three: budgetThree,
    file: file,
    full_name: fullName,
    email: email,
    phone: phone,
    checkbox: checkbox,
  };

  const requestConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  const isformValidated = validateForm();

  if (isformValidated) {
    alert(payload);

    // fetch(requestUrl, requestConfig)
    //   .then((response) => response.json())
    //   .then((response) => {
    //     if (response.id) {
    //       handleRegistrationSuccess(response);
    //     } else {
    //       handleRegistrationFailure(response);
    //     }
    //   });
  }
};

const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("peyload");
  console.log(handleSubmitForm());
  handleSubmitForm();
});

const file = document.getElementById("file");
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

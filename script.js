document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  let output = "";

  const labels = {
    firstname: "First Name",
    lastname: "Last Name",
    gender: "Gender",
    address: "Address",
    contact: "Contact Number",
    email: "Email Address",
    dob: "Date of Birth",
    username: "Username",
    password: "Password",
  };

  formData.forEach((value, key) => {
    const label = labels[key] || key;
    output += `<p><strong>${label}:</strong> ${value}</p>`;
  });

  document.getElementById("output").innerHTML = output;
  form.reset();
});

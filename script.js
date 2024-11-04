function diagnose() {
  const symptom = document.getElementById("symptom").value;
  const errorMessage = document.getElementById("error-message");

  if (symptom) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    alert("Por favor, selecione um sintoma.");
  }
}

function clearFields() {
  document.getElementById("symptom").value = "";
  document.getElementById("error-message").style.display = "none";
}

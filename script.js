const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");

let codeArray = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function btnDecrypter(role) {
  const textString = decrypter(role, textArea.value);
  message.value = textString;
  textArea.value = "";
}

function decrypter(role, textString) {
  textString = textString.toLowerCase();

  for (let i = 0; i < codeArray.length; i++) {
    if (role == "encrypt" && textString.includes(codeArray[i][0])) {
      textString = textString.replaceAll(codeArray[i][0], codeArray[i][1]);
    } else if (role == "decrypt" && textString.includes(codeArray[i][1])) {
      textString = textString.replaceAll(codeArray[i][1], codeArray[i][0]);
    }
  }

  return textString;
}

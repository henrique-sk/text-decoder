const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");
const preOutput = document.querySelectorAll(".pre-output");

let codeArray = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function btnDecrypter(rule) {
  hideOutputInfo();
  const textString = decrypter(rule, textArea.value);
  message.value = textString;
  textArea.value = "";
}

function hideOutputInfo() {
  document.getElementById("text-image").style.backgroundImage = "none";
  for (let el of preOutput) el.style.visibility = "hidden";
}

function decrypter(rule, textString) {
  let ruleColumn = whichColumn(rule);
  textString = textString.toLowerCase();
  for (let i = 0; i < codeArray.length; i++) {
    if (textString.includes(codeArray[i][ruleColumn[0]])) {
      textString = textString.replaceAll(
        codeArray[i][ruleColumn[0]],
        codeArray[i][ruleColumn[1]]
      );
    }
  }

  return textString;
}

function whichColumn(rule) {
  return rule == "encrypt"
    ? (columnCodeArray = [0, 1])
    : (columnCodeArray = [1, 0]);
}

function copyOutput() {
  let textarea = document.getElementById("text-image");
  textarea.select();
  textarea.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(textarea.value).then(() => {
    alert("Copied the text: " + textarea.value);
  });
}

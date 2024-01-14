
  document.getElementById('tryNowButton').addEventListener('click', function() {
    const cvHeader = document.getElementById('cvHeader');
    const cvForm = document.getElementById('cvForm');
    cvForm.style.display = 'block';
  });
// Efekt "pisania"
const text = "Stwórz swoje CV z CV Creator już teraz!";
let index = 0;
let displayText = '';

function typeWriter() {
  if (index < text.length) {
    displayText += text.charAt(index);
    document.getElementById("typingHeader").innerHTML = displayText;
    index++;
    setTimeout(typeWriter, 100); // Przerwa między pojawianiem się kolejnych liter
  } else {
    index = 0; // Zresetowanie indeksu, aby animacja zaczęła się od nowa
    displayText = ''; // Zresetowanie wyświetlanego tekstu
    setTimeout(typeWriter, 500); // Opóźnienie przed ponownym rozpoczęciem animacji
  }
}

// Rozpoczęcie efektu pisania po załadowaniu strony
window.onload = function() {
  typeWriter();
};

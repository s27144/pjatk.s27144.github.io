/* // Function to validate email format
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  // Function to generate PDF
  function generatePDF(container) {
    const doc = new jsPDF();
    doc.text(container, 10, 10);
    doc.save('generated_cv.pdf');
  }
  
  // Handle form submission
  document.getElementById('cvForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const photo = document.getElementById('photo').value;

  // Zapis danych do localStorage
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('phone', phone);
  localStorage.setItem('education', education);
  localStorage.setItem('experience', experience);
  localStorage.setItem('skills', skills);
  localStorage.setItem('photo', photo);

    window.open('result.html', '_blank');
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    const cvContent = `${name}'s CV\nEmail: ${email}\nPhone: ${phone}\nEducation: ${education}\nWork Experience: ${experience}\nSkills: ${skills}\nPhoto: ${photo}\n`;
    //document.getElementById('cvResult').innerText = cvContent;
  });
  
  // Handle "Download as PDF" button click
  document.getElementById('downloadPDF').addEventListener('click', function() {
    const container = document.getElementById('container').innerText;
  
    if (!cvContent) {
      alert('Generate the CV first.');
      return;
    }
    window.jsPDF = window.jspdf.jsPDF;
    generatePDF(container);
  }); */
  
  document.getElementById('tryNowButton').addEventListener('click', function() {
    const cvHeader = document.getElementById('cvHeader');
    const cvForm = document.getElementById('cvForm');
  
    //cvHeader.style.display = 'none'; // Ukryj nagłówek
    cvForm.style.display = 'block'; // Pokaż formularz

  });

 // Poprzednie funkcje i obsługa formularza

// Efekt "pisania" dla nagłówka h2 w sekcji CV Generator
const text = "Stwórz swoje CV z CV Creator już teraz!";
let index = 0;
let displayText = '';

function typeWriter() {
  if (index < text.length) {
    displayText += text.charAt(index);
    document.getElementById("typingHeader").innerHTML = displayText;
    index++;
    setTimeout(typeWriter, 100); // Przerwa między pojawianiem się kolejnych liter (w milisekundach)
  } else {
    index = 0; // Zresetowanie indeksu, aby animacja zaczęła się od nowa
    displayText = ''; // Zresetowanie wyświetlanego tekstu
    setTimeout(typeWriter, 500); // Opóźnienie przed ponownym rozpoczęciem animacji (w milisekundach)
  }
}

// Rozpoczęcie efektu pisania po załadowaniu strony
window.onload = function() {
  typeWriter();
};
/* 
document.getElementById('resultName').innerText = $name + "_CV";



            // Pobranie danych z localStorage i wyświetlenie ich w odpowiednich miejscach
            document.getElementById('name').innerText = `Name: ${localStorage.getItem('name')}`;
            document.getElementById('email').innerText = `Email: ${localStorage.getItem('email')}`;
            document.getElementById('phone').innerText = `Phone: ${localStorage.getItem('phone')}`;
            document.getElementById('education').innerText = `Education: ${localStorage.getItem('education')}`;
            document.getElementById('experience').innerText = `Work Experience: ${localStorage.getItem('experience')}`;
            document.getElementById('skills').innerText = `Skills: ${localStorage.getItem('skills')}`;
      
            // Wyświetlenie zdjęcia
            const photoUrl = localStorage.getItem('photo');
            if (photoUrl) {
              document.getElementById('photo').src = photoUrl;
            } */
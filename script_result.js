document.addEventListener('DOMContentLoaded', function () {
  var name = localStorage.getItem('name');
  var contactDetails = localStorage.getItem('contactDetails');
  var personalDescription = localStorage.getItem('personalDescription');
  var education = localStorage.getItem('education');
  var experience = localStorage.getItem('experience');
  var skills = localStorage.getItem('skills');
  var hobbys = localStorage.getItem('hobbys');


  document.getElementById('personalInfo').innerHTML = `
    <p>${name}</p>
    <p>${contactDetails}</p>
  `;
  document.getElementById('personalDescription').innerHTML = `

    <p>${personalDescription}</p>
  `;
  document.getElementById('experience').innerHTML = `
    <p> ${experience}</p>
  `;
  document.getElementById('education').innerHTML = `
    <p> ${education}</p>
  `;
  document.getElementById('hobbys').innerHTML = `
    <p> ${hobbys}</p>
  `;
  document.getElementById('skills').innerHTML = `
    <p> ${skills}</p>

  `;

});

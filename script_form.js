document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('cvForm').addEventListener('submit', function(event) {
      event.preventDefault(); 
      var name = document.getElementById('name').value;
      var contactDetails = document.getElementById('contactdetails').value;
      var personalDescription = document.getElementById('personaldescribtion').value;
      var education = document.getElementById('education').value;
      var experience = document.getElementById('experience').value;
      var skills = document.getElementById('skills').value;
      var hobbys = document.getElementById('hobbys').value;

      localStorage.setItem('name', name);
      localStorage.setItem('contactDetails', contactDetails);
      localStorage.setItem('personalDescription', personalDescription);
      localStorage.setItem('education', education);
      localStorage.setItem('experience', experience);
      localStorage.setItem('skills', skills);
      localStorage.setItem('hobbys', hobbys);
      window.location.href = 'result.html';
      //window.open('https://api.urlbox.io/v1/fqzMzMZ5hRsrtFYo/pdf?url=s27144.github.io/result.html', '_blank');
  });

 /*  document.getElementById('downloadPDF').addEventListener('click', function() {
      window.open('https://api.urlbox.io/v1/fqzMzMZ5hRsrtFYo/pdf?url=s27144.github.io/result.html', '_blank');
  }); */
});

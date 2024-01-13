
    function CreatePDFfromHTML() {
        var HTML_Width = $(".body").width();
        var HTML_Height = $(".body").height();
        var top_left_margin = 15;
         var scale_factor = 1;

        var PDF_Width = HTML_Width * scale_factor + (top_left_margin * 2);
        var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
        var canvas_image_width = HTML_Width * scale_factor;
        var canvas_image_height = HTML_Height * scale_factor;

        var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

        html2canvas($(".body")[0], { scale: scale_factor }).then(function (canvas) {
            var imgData = canvas.toDataURL("image/jpeg", 1.0);
            var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
            pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);

            for (var i = 1; i <= totalPDFPages; i++) { 
                pdf.addPage(PDF_Width, PDF_Height);
                pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4), canvas_image_width, canvas_image_height);
            }

            pdf.save("Your_PDF_Name.pdf");
            $(".body").hide();
        });
    }
    const btn = document.getElementById('downloadPDF');
btn.addEventListener("click", () =>{
    // CreatePDFfromHTML();
    btn.style.display = 'none';
    window.open("https://api.urlbox.io/v1/fqzMzMZ5hRsrtFYo/pdf?url=s27144.github.io/index.html");
    
    
//Create PDf from HTML...

})

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

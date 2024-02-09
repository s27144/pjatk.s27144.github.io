function show() {
    document.getElementById("valentine").style.display = "block";
    document.getElementById("response-buttons").style.display = "flex";
    document.getElementById("message").style.display = "none";
	document.getElementById("yes").style.display = "block";
	document.getElementById("no").style.display = "block";
}

function answer(response) {
    const yesButton = document.getElementById("yes");
    if (response === 'no') {
        // Pobieranie aktualnej skali i zwiększanie jej o 10%
        const currentScale = Number(yesButton.style.transform.replace('scale(', '').replace(')', '')) || 1;
        const newScale = currentScale * 1.1;
        yesButton.style.transform = `scale(${newScale})`;
    } else if (response === 'yes') {
        // Dodanie marginesu do filmu, aby zapewnić przestrzeń
        const video = '<div style="margin-top: 20px;"><iframe width="560" height="315" src="https://www.youtube.com/embed/DrXSXYfYV0o?si=w2Nd2jIJiHI--3Ii" frameborder="0" allowfullscreen></iframe></div>';
        document.getElementById("response-buttons").insertAdjacentHTML('afterend', video);
		document.getElementById("end").style.display = "block";
		document.getElementById("end2").style.display = "block";
    }
}

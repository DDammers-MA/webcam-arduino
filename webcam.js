

const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const downloadButton = document.getElementById('download-button');

const webcam = new Webcam(webcamElement, 'user', canvasElement, );
 

webcam.start()
.then(result =>{
   console.log("webcam started");
})
.catch(err => {
    console.log(err);
});

let picture = webcam.snap();


downloadButton.addEventListener('click', () => {
    // Haal de afbeelding op van de canvas
    const image = canvasElement.toDataURL("image/png").replace("image/png", "image/octet-stream");
    // Maak een download link aan en geef hem de juiste href
    const link = document.createElement('a');
    link.download = 'image.png';
    link.href = image;
    link.click();
});








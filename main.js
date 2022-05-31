Webcam.set({
  height: 300,
  width: 300,
  image_format: "png",
  png_quality: 90
});

camera = document.getElementById('camera');

Webcam.attach('camera');

function takesnapshot() {
  Webcam.snap(function(data_uri) {
    document.getElementById('output').innerHTML =  '<img id="selfie_image" src="'+data_uri+'"/>';
  });
}

console.log('ml5 version=', ml5.version);
Model = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qLysUtxv6/model.json',modelLoaded);

function modelLoaded() {
  console.log('modelLoaded successfully');
}

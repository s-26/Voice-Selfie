var speechRecognition=window.webkitSpeechRecognition;
var Recognition=new speechRecognition();
function start(){
    document.getElementById("text_box").innerHTML="";
    Recognition.start()
}
Recognition.onresult=function run(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("text_box").innerHTML=content;
    speak();
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data=document.getElementById("text_box").value;
    var otturthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(otturthis);
    Webcam.attach(camera);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
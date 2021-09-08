status="";
bed="";

function preload(){
bed=loadImage("bed.jpg");
}

function setup(){
    canvas=createCanvas(450,420);
    canvas.center();

    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Detecting Objects";
}

function modelLoaded(){
    console.log('Model Loaded!!!');
    status=true;
    objectDetector.detect(cog,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;

    }
}
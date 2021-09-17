status="";
toy="";
b_objects=[];
function preload(){
toy=loadImage("toys.jpg");
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
    objectDetector.detect(toy,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        b_objects=results;

    }
}

function draw(){
    image(toy,0,0,450,420);
    if(status != ""){
        document.getElementById("status").innerHTML="Status: Object Detected";
        for(var i=0; i < b_objects.length; i++){

            fill("#42046b");
            percent=floor(b_objects[i].confidence * 100);
            text(b_objects[i].label+" "+percent+"%",b_objects[i].x+20,b_objects[i].y+20);
            noFill();
            stroke("#42046b");
            rect(b_objects[i].x,b_objects[i].y,b_objects[i].width,b_objects[i].height);

            document.getElementById("info").innerHTML="The cocossd model has detected 2 things,a teddy bear and bottle there is no bottle and the square has gone out of the picture";
        }
    }
}
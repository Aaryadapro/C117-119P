function preload()
{
    ml5.imageClassifier("DoodleNet")
}

function setup()
{
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(check_sketch);
}

quick_draw_data_set=['Plane', 'Apple', "Bottle", 'Car', 'Circle']

random_number = Math.floor((Math.random()* quick_draw_data_set.length)+1);

Element_of_array = quick_draw_data_set[random_number];

console.log(Element_of_array);

sketch = quick_draw_data_set[random_number];

document.getElementById("Sketch").innerHTML="Sketch to be drawn:"+ sketch;

timercounter= 0;
timer_check= "";
drawn_sketch="";
answer_holder="";
score= 0;

function draw(){
    strokeWeight(4)
    stroke(0);

    if(mouseIsPressed){
    line(pmouseX, pmouseY, mouseX, mouseY);
    }
}



function check_sketch()
{
    gotResults();  
}

function update_canvas()
{
       background("white");
}

function classifyCanvas()
{
    classifier.classify(classifier.classify(canvas, gotResults))
}


function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("Skeetch").innerHTML ="Your Sketch : "+ results[0].label;

        document.getElementById("confideence").innerHTML = "Confidence : "+ Math.round(results[0].confidence * 100) + '%';
    }
}

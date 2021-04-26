let angle = 0;

let slider;
let len;

function setup() {
    createCanvas(500, 500);
    len = createSlider(1, 150, 100, 1);
    slider = createSlider(1, len.value(), 1, 1)
}

function draw() {
    background(51);
    translate(width / 2, height)
    stroke(255, 100);
    angle = TWO_PI / 16;
    branch(len.value());
}

function branch(len) {
    line(0, 0, 0, -len)
    translate(0, -len);
    if (len > slider.value()) {
        push();
        rotate(angle);
        branch(len * 0.67);
        pop();

        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }
}
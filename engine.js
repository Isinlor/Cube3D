function setPixel(imageData, x, y, rgb=[0,0,0], a = 255) {
    index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = rgb[0];
    imageData.data[index+1] = rgb[1];
    imageData.data[index+2] = rgb[2];
    imageData.data[index+3] = a;
}

element = document.getElementById("canvas1");
c = element.getContext("2d");

// read the width and height of the canvas
width = element.width;
height = element.height;

// create a new pixel array
imageData = c.createImageData(width, height);

// draw random dots
for (i = 0; i < 100000; i++) {
    x = Math.random() * width | 0; // |0 to truncate to Int32
    y = Math.random() * height | 0;
    setPixel(imageData, x, y);
}

// copy the image data back onto the canvas
c.putImageData(imageData, 0, 0); // at coords 0,0
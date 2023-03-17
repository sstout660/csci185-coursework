
function makeRed() {
    // your code here...
    console.log('Change background to red');
    document.querySelector('#section1').style.backgroundColor = '#FC2F00';
    document.querySelector('#section1').style.color = '#FFFFFF';
};

function makeBlue() {
    // your code here...
    console.log('Change background to blue');
    document.querySelector('#section2').style.backgroundColor = '#84ACCE';
};

function makePink() {
    // your code here...
    console.log('Change background to pink');
    document.querySelector('#section3').style.backgroundColor = '#E76B74';
};

function makeOrange() {
    // your code here...
    console.log('Change background to orange');
    document.querySelector('#section4').style.backgroundColor = '#FF8C61';

};

function clearScreen() {
    console.log('Clear background color');
    document.querySelector('#section1').style.backgroundColor = '#FFFFFF';
    document.querySelector('#section1').style.color = 'black';
    document.querySelector('#section2').style.backgroundColor = '#FFFFFF';
    document.querySelector('#section2').style.color = 'black';
    document.querySelector('#section3').style.backgroundColor = '#FFFFFF';
    document.querySelector('#section3').style.color = 'black';
    document.querySelector('#section4').style.backgroundColor = '#FFFFFF';
    document.querySelector('#section4').style.color = 'black';
}
const names = [
    "Jane", "Brenda", "Wanda", "Maria", "Jasper",
    "John", "Malik", "Arjun", "Larry", "Curly", "Moe", "Simon", "Batman"
];



// use a while loop to output a message for each
// item in the array:
const outputElement = document.querySelector('#output');
outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[1]}!</p>`);
outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[2]}!</p>`);
outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[3]}!</p>`);
outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[0]}!</p>`);

let i = 0
while(i < names.length) {
    outputElement.insertAdjacentHTML('beforeend', `<p>Welcome ${names[i]}!</p>`);
    i +=1;
}
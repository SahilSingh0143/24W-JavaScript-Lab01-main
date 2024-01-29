// STEP 1: Declare and initialize variables
var customName = document.getElementById("customname");
var randomize = document.querySelector(".randomize");
var story = document.querySelector(".story");

// STEP 3: Create the variable that contains the story string
var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

// STEP 4: Create three arrays
var insertX = ['Donald Trump', 'Jackie Chan', 'Santa Claus'];
var insertY = ['Area 51', 'Death Valley', 'Aruba'];
var insertZ = ['spontaneously combusted', 'rapidly sublimated', 'evaporated instantly'];

// STEP 6: Function to get a random value from an array
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// STEP 7-13: Function to generate and display the story
function result() {
    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(":insertx:", xItem).replace(":inserty:", yItem).replace(":insertz:", zItem);

    if (customName.value !== "") {
        newStory = newStory.replace("Bob", customName.value);
    }
    
    if (document.getElementById("metric").checked) {
        var weight = 300 * 0.453592; // 300 pounds to kilograms
        var temp = (94 - 32) * 5/9; // Fahrenheit to Celsius

        newStory = newStory.replace("300 pounds", weight.toFixed(2) + " kilograms");
        newStory = newStory.replace("94 farenheit", temp.toFixed(2) + " celsius");
    }

    story.textContent = newStory;
    story.style.visibility = "visible";
}

// STEP 5: Add a click event listener to the randomize variable
randomize.addEventListener("click", result);

// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select the slider elements and the body
    const redSlider = document.getElementById('red');
    const greenSlider = document.getElementById('green');
    const blueSlider = document.getElementById('blue');
    const body = document.body;

    // Function to update the background color based on slider values
    function updateBackgroundColor() {
        const red = redSlider.value;    // Get current red value (0-255)
        const green = greenSlider.value; // Get current green value (0-255)
        const blue = blueSlider.value;  // Get current blue value (0-255)
        body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; // Set RGB color
    }

    // Add event listeners to each slider for real-time updates
    redSlider.addEventListener('input', updateBackgroundColor);
    greenSlider.addEventListener('input', updateBackgroundColor);
    blueSlider.addEventListener('input', updateBackgroundColor);

    // Set the initial background color when the page loads
    updateBackgroundColor();
});
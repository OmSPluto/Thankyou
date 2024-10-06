// Function to show the blessing screen and wait for 5 seconds before showing the letter
function showBlessingScreen() {
    document.getElementById('blessingScreen').style.display = 'flex';
    startCountdown(5); // Start countdown from 5 seconds

    // Wait for 5 seconds before showing the letter screen
    setTimeout(function() {
        document.getElementById('blessingScreen').style.display = 'none';
        document.getElementById('letterScreen').style.display = 'block';
    }, 5000);
}

// Function for countdown
function startCountdown(seconds) {
    let countdownElement = document.getElementById('countdown');
    let countdown = seconds;

    const interval = setInterval(function() {
        countdownElement.textContent = countdown;
        countdown--;

        if (countdown < 0) {
            clearInterval(interval);
        }
    }, 1000);
}

// Function to open the letter and show the open letter content
function openLetter() {
    // Show overlay
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('hidden');
    overlay.style.opacity = '1'; // Fade-in overlay

    // Hide closed letter
    const closedLetter = document.getElementById('closedLetter');
    closedLetter.style.display = 'none';

    // Show letter with animation
    const openLetter = document.getElementById('openLetter');
    openLetter.classList.remove('hidden');

    // Add show class to trigger animation after a short delay
    setTimeout(() => {
        openLetter.classList.add('show'); // Add show class for animation
    }, 10);
}

// Function to close the letter and show the closed letter image
function closeLetter() {
    const openLetter = document.getElementById('openLetter');
    openLetter.classList.remove('show'); // Start closing animation
    const overlay = document.getElementById('overlay');

    setTimeout(() => {
        openLetter.classList.add('hidden'); // Hide letter after animation
        overlay.style.opacity = '0'; // Hide overlay
        overlay.classList.add('hidden'); // Hide overlay class
        document.getElementById('closedLetter').style.display = 'block'; // Show closed letter
    }, 500); // Match the duration of the CSS transition
}

// Start the blessing screen when the window loads
window.onload = showBlessingScreen;

// Function to create hover effect on gift images
function hoverEffect(img) {
    img.style.transform = 'scale(1.1)'; // Scale image on hover
    img.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)'; // Add shadow
}

// Function to remove hover effect on gift images
function removeEffect(img) {
    img.style.transform = 'scale(1)'; // Reset scale
    img.style.boxShadow = 'none'; // Remove shadow
}

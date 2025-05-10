document.addEventListener('DOMContentLoaded', function () {
    const menuToggleButton = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    // Toggle the sidebar when the hamburger menu is clicked
    menuToggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('open');
        body.classList.toggle('open-sidebar');
    });})


function toggleSolution(id) {
    const solution = document.getElementById(id);
    const content = solution.querySelector('.hidden-content');
    const button = solution.querySelector('button');

    content.classList.toggle('show');

    if (content.classList.contains('show')) {
        button.textContent = 'Hide Solution';  // Change the button text
    } else {
        button.textContent = 'Show Solution';  // Revert the button text
    }
}

 // Add event listeners for the solution toggle buttons
 const solutionButtons = document.querySelectorAll('.solution-toggle');
 solutionButtons.forEach(button => {
     button.addEventListener('click', function() {
         const targetId = this.getAttribute('data-target');
         const content = document.getElementById(targetId);
         
         // Toggle visibility of the solution content
         content.classList.toggle('show');
         
         // Change button text based on the visibility of the content
         if (content.classList.contains('show')) {
             this.textContent = 'Hide Solution';  // Change the button text
         } else {
             this.textContent = 'Show Solution';  // Revert the button text
         }
     });
 });

 // Check the answers for interactive exercises and validate input
const checkAnswerButtons = document.querySelectorAll('.check-answer');
checkAnswerButtons.forEach(button => {
    button.addEventListener('click', function () {
        const problemId = this.getAttribute('data-problem');
        const userAnswer = document.getElementById(`answer${problemId}`).value.trim();
        let correctAnswer = '';

        // Define the correct answer for each problem
        switch (problemId) {
            case '1':
                correctAnswer = '8/3'; // Correct answer for Exercise 1
                break;
            case '2':
                correctAnswer = 'π/2'; // Correct answer for Exercise 2
                break;
            case '3':
                correctAnswer = '20'; // Correct answer for Exercise 3 (Work to compress the spring)
                break;
            case '4':
                correctAnswer = '1/ln(2)'; // Correct answer for Exercise 4 (Average value of e^x)
                break;
            case '5':
                correctAnswer = '1.44'; // Correct answer for Exercise 5 (Arc length)
                break;
            default:
                correctAnswer = '';
        }

        const feedback = document.getElementById(`feedback${problemId}`);
        
        // Validate the answer and provide feedback
        if (userAnswer === correctAnswer) {
            feedback.textContent = 'Correct!';
            feedback.style.color = 'green';
        } else if (userAnswer === '') {
            feedback.textContent = 'Please enter an answer.';
            feedback.style.color = 'orange';
        } else {
            feedback.textContent = 'Incorrect, try again.';
            feedback.style.color = 'red';
        }
    });
});

function toggleAnswers() {
    const answersSection = document.getElementById('practice-answers');
    const button = document.getElementById('show-answers');
    
    answersSection.classList.toggle('show');
    
    if (answersSection.classList.contains('show')) {
        button.textContent = 'Hide Answers';  // Change button text to hide
    } else {
        button.textContent = 'Show Answers';  // Revert button text
    }
}

function playVideo() {
    // Hide the thumbnail and play button
    document.querySelector('.thumbnail-container').style.display = 'none';
    
    // Show the video and start playing
    var video = document.getElementById('video');
    video.style.display = 'block';
    video.play();
}



window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
    }
};

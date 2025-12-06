
// TYPING ANIMATION

const textEl = document.getElementById("typing-text");
const text = "BSE Specialisation Advisor";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        textEl.textContent = text.slice(0, i + 1);
        i++;
        setTimeout(typeEffect, 80);
    }
}
window.addEventListener("load", typeEffect);
  
  
  
        // QUIZ DATA SECTION
    
        
        // Quiz questions array - each question has options with scores for each specialisation
        // Each option awards points to one or more specialisations (lowLevel, arVr, fullStack, ml)
        const questions = [
            {
                question: "Which type of technical challenge would you find most rewarding?",
                options: [
                    { text: "Reducing program execution time from 10 seconds to 0.5 seconds", scores: { lowLevel: 3, arVr: 0, fullStack: 0, ml: 0 } },
                    { text: "Creating an interactive 3D environment users can walk through", scores: { lowLevel: 0, arVr: 3, fullStack: 0, ml: 0 } },
                    { text: "Building a platform that connects thousands of users simultaneously", scores: { lowLevel: 0, arVr: 0, fullStack: 3, ml: 0 } },
                    { text: "Training a system that predicts outcomes with 95% accuracy", scores: { lowLevel: 0, arVr: 0, fullStack: 0, ml: 3 } }
                ]
            },
            {
                question: "When learning a new technology, what approach do you naturally prefer?",
                options: [
                    { text: "Reading technical documentation about system architecture and memory management", scores: { lowLevel: 3, arVr: 0, fullStack: 0, ml: 0 } },
                    { text: "Following visual tutorials and experimenting with 3D tools", scores: { lowLevel: 0, arVr: 3, fullStack: 0, ml: 0 } },
                    { text: "Building small projects that interact with databases and APIs", scores: { lowLevel: 0, arVr: 0, fullStack: 3, ml: 0 } },
                    { text: "Analyzing datasets and running experiments to see patterns", scores: { lowLevel: 0, arVr: 0, fullStack: 0, ml: 3 } }
                ]
            },
            {
                question: "What would motivate you most when working on a long-term project?",
                options: [
                    { text: "Achieving maximum performance and efficiency", scores: { lowLevel: 3, arVr: 0, fullStack: 0, ml: 0 } },
                    { text: "Seeing your creation come to life in immersive ways", scores: { lowLevel: 0, arVr: 3, fullStack: 0, ml: 0 } },
                    { text: "Knowing millions of people will use your application daily", scores: { lowLevel: 0, arVr: 0, fullStack: 3, ml: 0 } },
                    { text: "Discovering insights hidden in data that solve real problems", scores: { lowLevel: 0, arVr: 0, fullStack: 0, ml: 3 } }
                ]
            },
            {
                question: "In a team project, which role would you naturally gravitate toward?",
                options: [
                    { text: "The one optimizing code and fixing performance bottlenecks", scores: { lowLevel: 3, arVr: 0, fullStack: 0, ml: 0 } },
                    { text: "The one designing visual experiences and user interactions", scores: { lowLevel: 0, arVr: 3, fullStack: 0, ml: 0 } },
                    { text: "The one connecting frontend, backend, and ensuring everything works together", scores: { lowLevel: 0, arVr: 0, fullStack: 3, ml: 0 } },
                    { text: "The one analyzing user behavior data and suggesting improvements", scores: { lowLevel: 0, arVr: 0, fullStack: 0, ml: 3 } }
                ]
            },
            {
                question: "Which emerging technology excites you most?",
                options: [
                    { text: "Quantum computing and next-generation processors", scores: { lowLevel: 3, arVr: 0, fullStack: 0, ml: 0 } },
                    { text: "Spatial computing and mixed reality experiences", scores: { lowLevel: 0, arVr: 3, fullStack: 0, ml: 0 } },
                    { text: "Progressive web apps and edge computing", scores: { lowLevel: 0, arVr: 0, fullStack: 3, ml: 0 } },
                    { text: "Autonomous systems and neural networks", scores: { lowLevel: 0, arVr: 0, fullStack: 0, ml: 3 } }
                ]
            },
            {
                question: "If you had to build something today, what would you choose?",
                options: [
                    { text: "A fitness tracker that runs efficiently on limited hardware", scores: { lowLevel: 3, arVr: 0, fullStack: 0, ml: 0 } },
                    { text: "A museum app with AR features showing historical artifacts", scores: { lowLevel: 0, arVr: 3, fullStack: 0, ml: 0 } },
                    { text: "An online marketplace with payment processing and user accounts", scores: { lowLevel: 0, arVr: 0, fullStack: 3, ml: 0 } },
                    { text: "A smart system that recommends content based on user preferences", scores: { lowLevel: 0, arVr: 0, fullStack: 0, ml: 3 } }
                ]
            },
            {
                question: "What kind of technical article would you most likely read voluntarily?",
                options: [
                    { text: "How operating systems manage memory and processes", scores: { lowLevel: 3, arVr: 0, fullStack: 0, ml: 0 } },
                    { text: "Advances in real-time ray tracing for realistic graphics", scores: { lowLevel: 0, arVr: 3, fullStack: 0, ml: 0 } },
                    { text: "Scaling web applications to handle millions of requests", scores: { lowLevel: 0, arVr: 0, fullStack: 3, ml: 0 } },
                    { text: "How neural networks learn from training data", scores: { lowLevel: 0, arVr: 0, fullStack: 0, ml: 3 } }
                ]
            },
            {
                question: "Five years from now, which achievement would make you most proud?",
                options: [
                    { text: "Contributing to critical infrastructure or embedded systems", scores: { lowLevel: 3, arVr: 0, fullStack: 0, ml: 0 } },
                    { text: "Creating an award-winning immersive experience", scores: { lowLevel: 0, arVr: 3, fullStack: 0, ml: 0 } },
                    { text: "Building a platform used by businesses worldwide", scores: { lowLevel: 0, arVr: 0, fullStack: 3, ml: 0 } },
                    { text: "Developing an AI solution that transforms an industry", scores: { lowLevel: 0, arVr: 0, fullStack: 0, ml: 3 } }
                ]
            }
        ];

   
        // SPECIALISATION DATA SECTION

        // Specialisation data with descriptions and recommendations
        // Contains detailed information about each BSE specialisation path
        const specialisations = {
            lowLevel: {
                name: "Low-Level Programming",
                description: "You have a strong interest in understanding how computers work at a fundamental level. You enjoy working with hardware, optimizing system performance, and solving problems that require deep technical knowledge of computer architecture.",
                strengths: [
                    "System-level thinking and optimization",
                    "Understanding of hardware-software interaction",
                    "Performance-critical application development",
                    "Problem-solving at the architectural level"
                ],
                nextSteps: [
                    "Master C and C++ programming languages",
                    "Study computer architecture and operating systems",
                    "Learn about embedded systems and microcontrollers",
                    "Practice with Arduino or Raspberry Pi projects",
                    "Explore real-time systems and device drivers"
                ],
                careers: [
                    "Systems Engineer",
                    "Embedded Software Developer",
                    "Firmware Engineer",
                    "IoT Specialist",
                    "Operating Systems Developer"
                ]
            },
            arVr: {
                name: "AR/VR Development",
                description: "You are drawn to creating immersive experiences and working with cutting-edge technology. Your interests align with spatial computing, 3D graphics, and building applications that blend the digital and physical worlds.",
                strengths: [
                    "3D visualization and graphics programming",
                    "Spatial reasoning and geometry",
                    "Creative problem-solving",
                    "User experience in immersive environments"
                ],
                nextSteps: [
                    "Learn Unity or Unreal Engine",
                    "Study 3D mathematics and computer graphics",
                    "Explore AR frameworks like ARKit and ARCore",
                    "Practice 3D modeling with Blender",
                    "Build small VR/AR prototype projects"
                ],
                careers: [
                    "VR/AR Developer",
                    "3D Graphics Programmer",
                    "Game Developer",
                    "XR Engineer",
                    "Simulation Developer"
                ]
            },
            fullStack: {
                name: "Full-Stack Web Development",
                description: "You enjoy building complete applications that users interact with daily. Your interests span both frontend and backend development, with a focus on creating scalable, user-friendly web applications.",
                strengths: [
                    "End-to-end application development",
                    "User interface and experience design",
                    "Database and API architecture",
                    "Problem-solving across the full stack"
                ],
                nextSteps: [
                    "Master JavaScript and modern frameworks (React, Vue, or Angular)",
                    "Learn backend development with Node.js or Python",
                    "Study database design (SQL and NoSQL)",
                    "Practice building RESTful APIs",
                    "Deploy projects on cloud platforms"
                ],
                careers: [
                    "Full-Stack Developer",
                    "Web Application Engineer",
                    "Frontend Developer",
                    "Backend Developer",
                    "DevOps Engineer"
                ]
            },
            ml: {
                name: "Machine Learning",
                icon: "&#129504;",
                description: "You are fascinated by data and the potential of artificial intelligence. You enjoy working with algorithms, statistics, and building systems that can learn and make predictions from data.",
                strengths: [
                    "Data analysis and pattern recognition",
                    "Mathematical and statistical thinking",
                    "Algorithm development and optimization",
                    "Research and experimentation"
                ],
                nextSteps: [
                    "Master Python and ML libraries (scikit-learn, TensorFlow, PyTorch)",
                    "Study statistics, probability, and linear algebra",
                    "Practice with datasets from Kaggle",
                    "Learn about different ML algorithms and when to use them",
                    "Explore deep learning and neural networks"
                ],
                careers: [
                    "Machine Learning Engineer",
                    "Data Scientist",
                    "AI Research Engineer",
                    "ML Ops Engineer",
                    "Computer Vision Engineer"
                ]
            }
        };
        // Global variables to track quiz state
        let currentQuestionIndex = 0;
        let scores = { lowLevel: 0, arVr: 0, fullStack: 0, ml: 0 };
        let selectedAnswer = null;

        // Function to show different pages
        function showPage(pageName) {
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            
            // Show selected page
            document.getElementById(pageName).classList.add('active');
            
            // If showing quiz page, initialize it
            if (pageName === 'quiz') {
                initQuiz();
            }
        }

        // Initialize the quiz
        function initQuiz() {
            currentQuestionIndex = 0;
            scores = { lowLevel: 0, arVr: 0, fullStack: 0, ml: 0 };
            selectedAnswer = null;
            document.getElementById('total-questions').textContent = questions.length;
            displayQuestion();
        }

        // Display current question
        function displayQuestion() {
            const question = questions[currentQuestionIndex];
            const container = document.getElementById('question-container');
            
            // Update progress
            document.getElementById('current-question').textContent = currentQuestionIndex + 1;
            const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
            document.getElementById('progress-fill').style.width = progressPercent + '%';
            
            // Build question HTML
            let optionsHTML = '';
            question.options.forEach((option, index) => {
                optionsHTML += `
                    <div class="option" onclick="selectOption(${index})">
                        <input type="radio" name="answer" id="option${index}" value="${index}">
                        <label for="option${index}">${option.text}</label>
                    </div>
                `;
            });
            
            container.innerHTML = `
                <h2>${question.question}</h2>
                <div class="options">
                    ${optionsHTML}
                </div>
            `;
            
            // Update button text
            const nextBtn = document.getElementById('next-btn');
            if (currentQuestionIndex === questions.length - 1) {
                nextBtn.textContent = 'See Results';
            } else {
                nextBtn.textContent = 'Next Question';
            }
        }

        // Handle option selection
        function selectOption(index) {
            selectedAnswer = index;
            // Visual feedback - check the radio button
            document.getElementById('option' + index).checked = true;
        }



         // move to the previous questions

     function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        selectedAnswer = null;
        displayQuestion();

        // Show next button again (in case user was on last question)
        document.getElementById('next-btn').textContent = 
            currentQuestionIndex === questions.length - 1 ? 'See Results' : 'Next Question';

        // Hide prev button if we return to Q1
        if (currentQuestionIndex === 0) {
            document.getElementById('prev-btn').style.display = "none";
        }
    }
}


        // Move to next question or show results
        function nextQuestion() {
            // Validate
        // Add scores from selected answer
        const currentQuestion = questions[currentQuestionIndex];
        const selectedOption = currentQuestion.options[selectedAnswer];
        
        Object.keys(selectedOption.scores).forEach(key => {
            scores[key] += selectedOption.scores[key];
        });
        
        // Move to next question or show results
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            selectedAnswer = null;
            displayQuestion();
        } else {
            showResults();
        }
    }

    

    // Calculate and display results
    function showResults() {
        // Find specialisation with highest score
        let maxScore = 0;
        let topSpec = '';
        
        Object.keys(scores).forEach(key => {
            if (scores[key] > maxScore) {
                maxScore = scores[key];
                topSpec = key;
            }
        });
        
        const result = specialisations[topSpec];
        
        // Display result header
    
        document.getElementById('result-title').textContent = result.name;
        document.getElementById('result-subtitle').textContent = 'Best Match for Your Profile';
        document.getElementById('result-description').textContent = result.description;
        
        // Display score chart
        const scoreChart = document.getElementById('score-chart');
        let chartHTML = '';
        
        Object.keys(scores).forEach(key => {
            const spec = specialisations[key];
            const percentage = (scores[key] / maxScore) * 100;
            
            chartHTML += `
                <div class="score-item">
                    <div class="score-label">
                        <span>${spec.name}</span>
                        <span>${scores[key]} points</span>
                    </div>
                    <div class="score-bar">
                        <div class="score-bar-fill" style="width: ${percentage}%"></div>
                    </div>
                </div>
            `;
        });
        
        scoreChart.innerHTML = chartHTML;
        
        // Display strengths
        const strengthsList = document.getElementById('result-strengths');
        strengthsList.innerHTML = result.strengths.map(strength => 
            `<li>${strength}</li>`
        ).join('');
        
        // Display next steps
        const stepsList = document.getElementById('result-steps');
        stepsList.innerHTML = result.nextSteps.map(step => 
            `<li>${step}</li>`
        ).join('');
        
        // Display careers
        const careersList = document.getElementById('result-careers');
        careersList.innerHTML = result.careers.map(career => 
            `<li>${career}</li>`
        ).join('');
        
        // Show results page
        showPage('results');
    }

    // Reset quiz and return to landing page
    function resetQuiz() {
        currentQuestionIndex = 0;
        scores = { lowLevel: 0, arVr: 0, fullStack: 0, ml: 0 };
        selectedAnswer = null;
        showPage('quiz');
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function() {
        showPage('landing');
    });

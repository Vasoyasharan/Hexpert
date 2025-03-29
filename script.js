document.addEventListener('DOMContentLoaded', function() {
    // Enhanced Color Database with difficulty levels
    const colorDatabase = {
        // Basic Colors (difficulty 1)
        "#FF0000": { name: "Red", rgb: "255, 0, 0", difficulty: 1 },
        "#00FF00": { name: "Green", rgb: "0, 255, 0", difficulty: 1 },
        "#0000FF": { name: "Blue", rgb: "0, 0, 255", difficulty: 1 },
        "#FFFF00": { name: "Yellow", rgb: "255, 255, 0", difficulty: 1 },
        "#FF00FF": { name: "Magenta", rgb: "255, 0, 255", difficulty: 1 },
        "#00FFFF": { name: "Cyan", rgb: "0, 255, 255", difficulty: 1 },
        "#FFA500": { name: "Orange", rgb: "255, 165, 0", difficulty: 1 },
        "#800080": { name: "Purple", rgb: "128, 0, 128", difficulty: 1 },
        "#008000": { name: "Dark Green", rgb: "0, 128, 0", difficulty: 1 },
        "#FFC0CB": { name: "Pink", rgb: "255, 192, 203", difficulty: 1 },
        
        // Intermediate Colors (difficulty 2)
        "#A52A2A": { name: "Brown", rgb: "165, 42, 42", difficulty: 2 },
        "#FFD700": { name: "Gold", rgb: "255, 215, 0", difficulty: 2 },
        "#C0C0C0": { name: "Silver", rgb: "192, 192, 192", difficulty: 2 },
        "#FF4500": { name: "Orange Red", rgb: "255, 69, 0", difficulty: 2 },
        "#DA70D6": { name: "Orchid", rgb: "218, 112, 214", difficulty: 2 },
        "#9932CC": { name: "Dark Orchid", rgb: "153, 50, 204", difficulty: 2 },
        "#8B0000": { name: "Dark Red", rgb: "139, 0, 0", difficulty: 2 },
        "#FF6347": { name: "Tomato", rgb: "255, 99, 71", difficulty: 2 },
        "#FF7F50": { name: "Coral", rgb: "255, 127, 80", difficulty: 2 },
        "#DAA520": { name: "Golden Rod", rgb: "218, 165, 32", difficulty: 2 },
        
        // Advanced Colors (difficulty 3)
        "#B8860B": { name: "Dark Golden Rod", rgb: "184, 134, 11", difficulty: 3 },
        "#2E8B57": { name: "Sea Green", rgb: "46, 139, 87", difficulty: 3 },
        "#4682B4": { name: "Steel Blue", rgb: "70, 130, 180", difficulty: 3 },
        "#1E90FF": { name: "Dodger Blue", rgb: "30, 144, 255", difficulty: 3 },
        "#4169E1": { name: "Royal Blue", rgb: "65, 105, 225", difficulty: 3 },
        "#4B0082": { name: "Indigo", rgb: "75, 0, 130", difficulty: 3 },
        "#8B4513": { name: "Saddle Brown", rgb: "139, 69, 19", difficulty: 3 },
        "#2F4F4F": { name: "Dark Slate Gray", rgb: "47, 79, 79", difficulty: 3 },
        "#708090": { name: "Slate Gray", rgb: "112, 128, 144", difficulty: 3 },
        "#E6E6FA": { name: "Lavender", rgb: "230, 230, 250", difficulty: 3 }
    };

    // DOM Elements
    const colorPicker = document.getElementById('colorPicker');
    const hexCode = document.getElementById('hexCode');
    const colorName = document.getElementById('colorName');
    const rgbCode = document.getElementById('rgbCode');
    const gradientPreview = document.getElementById('gradientPreview');
    const gradientColor1 = document.getElementById('gradientColor1');
    const gradientColor2 = document.getElementById('gradientColor2');
    const gradientDirection = document.getElementById('gradientDirection');
    const cssOutput = document.getElementById('cssOutput');
    const copyGradientBtn = document.getElementById('copyGradient');
    const quizColor = document.getElementById('quizColor');
    const userGuess = document.getElementById('userGuess');
    const submitGuess = document.getElementById('submitGuess');
    const quizResult = document.getElementById('quizResult');
    const quizScore = document.getElementById('quizScore');
    const newQuizBtn = document.getElementById('newQuiz');
    const themeToggle = document.getElementById('themeToggle');
    const colorSearch = document.getElementById('colorSearch');
    const clearSearch = document.getElementById('clearSearch');
    const difficultyDisplay = document.getElementById('difficultyDisplay');

    // Quiz state variables
    let currentQuizColor;
    let score = 0;
    let quizTimeLeft = 30;
    let quizTimer;
    let quizHistory = [];
    const MAX_HISTORY = 10;
    let currentDifficulty = 1;
    let consecutiveCorrect = 0;
    let consecutiveWrong = 0;

    // Create copy feedback element
    const copyFeedback = document.createElement('div');
    copyFeedback.className = 'copy-feedback';
    document.body.appendChild(copyFeedback);

    // Initialize the application
    function init() {
        setupColorPicker();
        setupGradientGenerator();
        setupColorQuiz();
        setupThemeToggle();
        setupSearchFunctionality();
        updateColorInfo(colorPicker.value);
        startQuiz();
    }

    // Color Picker Functions
    function setupColorPicker() {
        colorPicker.addEventListener('input', (e) => {
            updateColorInfo(e.target.value);
        });

        // Setup copy buttons
        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const targetId = this.getAttribute('data-target');
                const textToCopy = document.getElementById(targetId).textContent;
                showCopyFeedback(textToCopy);
            });
        });
    }

    function updateColorInfo(hex) {
        hex = hex.toUpperCase();
        hexCode.textContent = hex;
        
        const colorData = colorDatabase[hex] || { 
            name: `Custom ${hex}`, 
            rgb: hexToRgb(hex) 
        };
        
        colorName.textContent = colorData.name;
        rgbCode.textContent = colorData.rgb;
    }

    function hexToRgb(hex) {
        const r = parseInt(hex.substring(1, 3), 16);
        const g = parseInt(hex.substring(3, 5), 16);
        const b = parseInt(hex.substring(5, 7), 16);
        return `${r}, ${g}, ${b}`;
    }

    // Gradient Generator Functions
    function setupGradientGenerator() {
        // Set default colors
        gradientColor1.value = "#FF9A9E";
        gradientColor2.value = "#FAD0C4";
        
        // Initialize with default colors
        updateGradient();
        
        gradientColor1.addEventListener('input', updateGradient);
        gradientColor2.addEventListener('input', updateGradient);
        gradientDirection.addEventListener('change', updateGradient);
        copyGradientBtn.addEventListener('click', () => {
            showCopyFeedback(cssOutput.value, 'CSS copied!');
        });
    }

    function updateGradient() {
        const gradient = `linear-gradient(${gradientDirection.value}, ${gradientColor1.value}, ${gradientColor2.value})`;
        gradientPreview.style.background = gradient;
        cssOutput.value = `background: ${gradient};`;
    }

    // Enhanced Color Quiz Functions
    function setupColorQuiz() {
        submitGuess.addEventListener('click', checkGuess);
        userGuess.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkGuess();
        });
        
        newQuizBtn.addEventListener('click', function(e) {
            e.preventDefault();
            resetQuiz();
        });
    }

    function startQuiz() {
        clearInterval(quizTimer);
        quizTimeLeft = 30;
        updateQuizTimer();
        
        // Adjust difficulty based on performance
        if (consecutiveCorrect >= 3) {
            currentDifficulty = Math.min(currentDifficulty + 1, 3);
            consecutiveCorrect = 0;
            showDifficultyMessage(`Level Up! Now at Difficulty ${currentDifficulty}`);
        } else if (consecutiveWrong >= 2) {
            currentDifficulty = Math.max(currentDifficulty - 1, 1);
            consecutiveWrong = 0;
            showDifficultyMessage(`Easier Mode! Now at Difficulty ${currentDifficulty}`);
        }
        
        // Filter colors by current difficulty and recent history
        const availableColors = Object.entries(colorDatabase)
            .filter(([hex, data]) => 
                data.difficulty <= currentDifficulty && 
                !quizHistory.includes(hex)
            );
        
        // If we've shown all colors at this difficulty, reset history
        if (availableColors.length === 0) {
            quizHistory = [];
            return startQuiz();
        }
        
        // Select random color
        const [randomHex, colorData] = availableColors[
            Math.floor(Math.random() * availableColors.length)
        ];
        
        currentQuizColor = colorData;
        quizColor.style.backgroundColor = randomHex;
        userGuess.value = '';
        quizResult.textContent = '';
        userGuess.focus();
        
        // Add to history and maintain size
        quizHistory.push(randomHex);
        if (quizHistory.length > MAX_HISTORY) {
            quizHistory.shift();
        }
        
        // Update difficulty display
        if (difficultyDisplay) {
            difficultyDisplay.textContent = `Difficulty: ${'★'.repeat(currentDifficulty)}`;
        }
        
        quizTimer = setInterval(() => {
            quizTimeLeft--;
            updateQuizTimer();
            
            if (quizTimeLeft <= 0) {
                clearInterval(quizTimer);
                quizResult.textContent = `Time's up! It was ${currentQuizColor.name}.`;
                quizResult.style.color = "#F44336";
                consecutiveWrong++;
                setTimeout(startQuiz, 2000);
            }
        }, 1000);
    }

    function resetQuiz() {
        score = 0;
        quizScore.textContent = score;
        currentDifficulty = 1;
        quizHistory = [];
        consecutiveCorrect = 0;
        consecutiveWrong = 0;
        if (difficultyDisplay) {
            difficultyDisplay.textContent = `Difficulty: ★`;
        }
        startQuiz();
    }

    function showDifficultyMessage(message) {
        const diffMessage = document.createElement('div');
        diffMessage.className = 'difficulty-message';
        diffMessage.textContent = message;
        document.body.appendChild(diffMessage);
        
        setTimeout(() => {
            diffMessage.classList.add('fade-out');
            setTimeout(() => {
                document.body.removeChild(diffMessage);
            }, 500);
        }, 1500);
    }

    function updateQuizTimer() {
        document.getElementById('quizTimer').textContent = `${quizTimeLeft}s`;
    }

    function checkGuess() {
        const guess = userGuess.value.trim().toLowerCase();
        const correctName = currentQuizColor.name.toLowerCase();
        
        if (guess === correctName) {
            score++;
            quizResult.textContent = "Correct! 🎉";
            quizResult.style.color = "#4CAF50";
            consecutiveCorrect++;
            consecutiveWrong = 0;
        } else {
            quizResult.textContent = `Wrong! It's ${currentQuizColor.name}.`;
            quizResult.style.color = "#F44336";
            consecutiveWrong++;
            consecutiveCorrect = 0;
        }
        
        quizScore.textContent = score;
        clearInterval(quizTimer);
        setTimeout(startQuiz, 1500);
    }

    // Theme Functions
    function setupThemeToggle() {
        themeToggle.addEventListener('click', toggleTheme);
        
        // Initialize theme
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        } else {
            document.body.classList.remove('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        }
    }

    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        
        if (isDarkMode) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        }
    }

    // Search Functions
    function setupSearchFunctionality() {
        colorSearch.addEventListener('input', searchColors);
        clearSearch.addEventListener('click', clearSearchInput);
    }

    function searchColors() {
        const searchTerm = colorSearch.value.toLowerCase();
        if (searchTerm.length > 0) {
            clearSearch.classList.add('visible');
        } else {
            clearSearch.classList.remove('visible');
        }
        
        const colorCards = document.querySelectorAll('.color-card');
        
        colorCards.forEach(card => {
            const cardName = card.querySelector('.color-name').textContent.toLowerCase();
            const cardHex = card.querySelector('.color-hex').textContent.toLowerCase();
            
            if (cardName.includes(searchTerm) || cardHex.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function clearSearchInput() {
        colorSearch.value = '';
        clearSearch.classList.remove('visible');
        searchColors();
        colorSearch.focus();
    }

    // Utility Functions
    function showCopyFeedback(text, customMessage) {
        navigator.clipboard.writeText(text).then(() => {
            copyFeedback.textContent = customMessage || 'Copied to clipboard!';
            copyFeedback.classList.add('show');
            
            setTimeout(() => {
                copyFeedback.classList.remove('show');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            
            copyFeedback.textContent = 'Copied!';
            copyFeedback.classList.add('show');
            
            setTimeout(() => {
                copyFeedback.classList.remove('show');
            }, 2000);
        });
    }

    // Initialize the app
    init();
});
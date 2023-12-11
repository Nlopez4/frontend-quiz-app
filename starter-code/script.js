// display the name of type of quiz that depends on the button clicked on by the user
const quizTypeBtns = document.querySelectorAll('.quiz-type-btn');
const quizBtnsArr = [...quizTypeBtns]; 
const quizTitle = document.querySelector('#title');
const mainPage = document.querySelector('#main-page-container');
const p = document.createElement('p');
const img = document.createElement('img');
// questions 
let questionTitle = document.querySelector('.question');
const optionButtons = document.querySelectorAll('.option');
const quizContainer = document.querySelector('#quiz-container');

async function renderJson() {
    const response = await fetch("data.json");
    const quizData = await response.json();
    renderJsonData(quizData);
    quizType(quizData);
}
renderJson();


function quizType(jsonData){
    const {quizzes} = jsonData;
    //html
    const htmlQuestionsArr = quizzes[0].questions;
    const questionIndex = 0;
    const optionsArr = htmlQuestionsArr[questionIndex].options
    const correctAnswer = htmlQuestionsArr[questionIndex].answer;

    function buttonHandler(e){
        if (e.target.value === correctAnswer){
            e.target.classList.add("correct");
            e.target.style.backgroundColor = 'green';
        } else {
            e.target.classList.add("incorrect");
            e.target.style.backgroundColor = 'red';
        }
    }

    function htmlOptions(){
        for (let option of optionsArr) {
            const optionButton = document.createElement('button');
            optionButton.textContent = option;
            optionButton.value = option;
            optionButton.name = option;
            optionButton.addEventListener('click', buttonHandler);
            quizContainer.appendChild(optionButton);
            
        }
    }
    
    quizBtnsArr.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // html button display html questions
            if (btn.value === 'html') {
                questionTitle.innerHTML = JSON.stringify(htmlQuestionsArr[questionIndex].question)
                htmlOptions();
            } else {
                return;
            }
        });
    });
}

// use this function to display all the correct data 
function renderJsonData(jsonData) {
    // if user clicks btn, display correct json data 
    quizBtnsArr.map(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            let btnValue = btn.value;
            switch (btnValue) {
                case 'html':
                    img.src = './assets/images/icon-html.svg';
                    document.body.appendChild(img);
                    quizTitle.innerHTML = btn.innerHTML;
                    mainPage.style.display = "none";
                    break;
                case 'css':
                    img.src = './assets/images/icon-css.svg';
                    document.body.appendChild(img);
                    quizTitle.innerHTML = btn.innerHTML;
                    mainPage.style.display = "none";
                    break;
                case 'javascript':
                    img.src = './assets/images/icon-js.svg';
                    document.body.appendChild(img);
                    quizTitle.innerHTML = btn.innerHTML;
                    mainPage.style.display = "none";
                    break;
                case 'access':
                    img.src = './assets/images/icon-accessibility.svg';
                    document.body.appendChild(img);
                    quizTitle.innerHTML = btn.innerHTML;
                    mainPage.style.display = "none";
                    break;
            };
        });
    });
};

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

async function renderJson() {
    const response = await fetch("data.json");
    const quizData = await response.json();
    renderJsonData(quizData);
    quizType(quizData);
}
renderJson();


function quizType(jsonData){
    const {quizzes} = jsonData;
    const htmlQuestionsArr = quizzes[0].questions;
    const questionIndex = 0;
    
    quizBtnsArr.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // html button display html questions
            if (btn.value === 'html') {
                questionTitle.innerHTML = JSON.stringify(htmlQuestionsArr[questionIndex].question)

                // display all options in buttons
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

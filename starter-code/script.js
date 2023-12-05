// display the name of type of quiz that depends on the button clicked on by the user
const quizTypeBtns = document.querySelectorAll('.quiz-type-btn');
const quizBtnsArr = [...quizTypeBtns]; 
const quizTitle = document.querySelector('#title');
const mainPage = document.querySelector('#main-page-container');
const p = document.createElement('p');
const img = document.createElement('img');
// questions 
const questionTitle = document.querySelector('.question');
const optionButtons = document.querySelectorAll('.option');

async function renderJson() {
    const response = await fetch("data.json");
    const quizData = await response.json();
    quizPage(quizData);
    renderJsonData(quizData);
    quizQuestions(quizData);

}
renderJson();

function quizPage(jsonData) {
    quizBtnsArr.map(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            quizTitle.innerHTML = btn.innerHTML;
            mainPage.style.display = "none";
            // if html, show html questions 
        });
    });
};

function quizQuestions(jsonData) {
    // const { quizzes } = jsonData;
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
                    break;
                case 'css':
                    img.src = './assets/images/icon-css.svg';
                    document.body.appendChild(img);
                    break;
                case 'javascript':
                    img.src = './assets/images/icon-js.svg';
                    document.body.appendChild(img);
                    break;
                case 'access':
                    img.src = './assets/images/icon-accessibility.svg';
                    document.body.appendChild(img);
                    break;
            };
        });
    });
};

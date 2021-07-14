const quiz = [
    {
        question: '事業とはどれ？',
        answers: [
            'project',
            'program',
            'provido',
            'probably'  
        ],
        correct: 'project'
    },
    {
        question: '組や班とは？',
        answers: [
            'tea',
            'teacher',
            'tear',
            'team'  
        ],
        correct: 'team'
    },
    {
        question: '入力の反対語とは？',
        answers: [
            'input',
            'import',
            'output',
            'outlet'  
        ],
        correct: 'output'  
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
} 
setupQuiz();

const clickHander = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解です');
        score++;
    }else{
        window.alert('不正解');
    };
    quizIndex++;

    if(quizIndex < quizLength){
        setupQuiz();
    }else{
       window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHander(e);
    });
    handlerIndex++;
};





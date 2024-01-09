const quiz = [
    {
        question: 'CS(略称)の正解はどれ？　' + ' ⏩ 　' + ' ex.　' + ' ' + ' I _______ to fight.',
        answers: [
            'employee satisfaction',
            'customer satisfaction',
            'consumer satisfaction',
            'self satisfaction'  
        ],
        correct: 'customer satisfaction'
    },
    {
        question: '多様な　　' + ' ⏩ 　' + ' ex.　' + ' ' + ' There are _______ people in the USA.',
        answers: [
            'divde',
            'diverse',
            'divorce',
            'divine'  
        ],
        correct: 'diverse'
    },
    {
        question: '拒否する　　' + ' ⏩ 　' + ' ex.　' + ' ' + ' We _______ their idea.',
        answers: [
            'region',
            'rejoice',
            'regret',
            'reject'  
        ],
        correct: 'reject'  
    },
    {
        question: '申し込む　　' + ' ⏩ 　' + ' ex.　' + ' ' + ' I _______ for the job.',
        answers: [
            'applied',
            'application',
            'applause',
            'applicant'  
        ],
        correct: 'applied'  
    },
    {
        question: '急がせる　　' + ' ⏩ 　' + ' ex.　' + ' ' + ' I ______ you to choose.',
        answers: [
            'urban',
            'urine',
            'urge',
            'urn'  
        ],
        correct: 'urge'  
    },
    {
        question: '後悔する　　' + ' ⏩ 　' + ' ex.　' + ' ' + ' I ______ I cannot help you',
        answers: [
            'regret',
            'region',
            'rejoice',
            'reject'  
        ],
        correct: 'regret'
    },
    {
        question: '本物の　　' + ' ⏩ 　' + ' ex.　' + ' ' + ' This is a ________ gold watch.',
        answers: [
            'author',
            'authentic',
            'authority',
            'authenticity'  
        ],
        correct: 'authentic'
    },
    {
        question: '禁止する　　' + ' ⏩ 　' + ' ex.　' + ' ' + ' They _______ smoking here.',
        answers: [
            'form',
            'forward',
            'forget',
            'forbid'  
        ],
        correct: 'forbid'
    },
    {
        question: '義務　　' + ' ⏩ 　' + ' ex.　' + ' ' + ' He has an _______ to the company.',
        answers: [
            'obligation',
            'obivious',
            'obtain',
            'obvious'  
        ],
        correct: 'obligation'
    },
    {
        question: '大切にする　' + ' ⏩ 　' + ' ex.　' + ' ' + ' I cherish his friendship.',
        answers: [
            'cherish',
            'cheap',
            'chest',
            'cheerful'  
        ],
        correct: 'cherish'
    },
    {
        question: '和解する　　' + ' ⏩ 　' + ' ex.　' + ' ' + ' We must ________ our defferences.',
        answers: [
            'recycle',
            'recommend',
            'reconcile',
            'recruit'  
        ],
        correct: 'reconcile'
    },
    {
        question: '控える　　' + ' ⏩ 　' + ' ex.　' + ' ' + ' Please _______ from smoking.',
        answers: [
            'refrain',
            'refer',
            'refund',
            'refuse'  
        ],
        correct: 'refrain'  
    },
    {
        question: '　　' + ' ⏩ 　' + ' ex.　' + ' ' + ' I _______ for the job.',
        answers: [
            'applide',
            'application',
            'applause',
            'applicant'  
        ],
        correct: 'applied'  
    },
    {
        question: '　　' + ' ⏩ 　' + ' ex.　' + ' ' + ' I ______ you to choose.',
        answers: [
            'urban',
            'urine',
            'urge',
            'urn'  
        ],
        correct: 'urge'  
    },
    {
        question: '　　' + ' ⏩ 　' + ' ex.　' + ' ' + ' I ______ I cannot help you',
        answers: [
            'regret',
            'region',
            'rejoice',
            'reject'  
        ],
        correct: 'regret'
    },
    {
        question: '　　' + ' ⏩ 　' + ' ex.　' + ' ' + ' This is a ________ gold watch.',
        answers: [
            'author',
            'authentic',
            'authority',
            'authenticity'  
        ],
        correct: 'authentic'
    },
    {
        question: '　　' + ' ⏩ 　' + ' ex.　' + ' ' + ' They _______ smoking here.',
        answers: [
            'form',
            'forward',
            'forget',
            'forbid'  
        ],
        correct: 'forbid'
    },
    {
        question: '　　' + ' ⏩ 　' + ' ex.　' + ' ' + ' He has an _______ to the company.',
        answers: [
            'obligation',
            'obivious',
            'obtain',
            'obvious'  
        ],
        correct: 'obligation'
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





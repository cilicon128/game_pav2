const quiz = [
    {
        question: 'CS(略称)の正解はどれ？　',
        answers: [
            'employee satisfaction',
            'customer satisfaction',
            'consumer satisfaction',
            'self satisfaction'  
        ],
        correct: 'customer satisfaction'
    },
    {
        question: 'CS向上に取り組んでいますか？　　',
        answers: [
            'はい、積極的に',
            'いいえ、特には',
            'はい、少しだけ',
            'はい、とりあえず'  
        ],
        correct: 'はい、積極的に'
    },
    {
        question: 'お客様に、ありがとうと言われたら嬉しいですか？',
        answers: [
            'はい、とても',
            'いいえ、特には',
            'はい、少しだけ',
            'はい、当たり前のこと'  
        ],
        correct: 'はい、とても'  
    },
    {
        question: 'URからURに住み替えのお客様は、どうですか？',
        answers: [
            'はい、ありがたいお得意様です',
            'いいえ、特には',
            'はい、少しだけ',
            'はい、URしか他に行くところがないので'  
        ],
        correct: 'はい、ありがたいお得意様です'  
    },
    {
        question: 'お客様の満足度を上げるとどうなりますか？',
        answers: [
            '特に、効果はない',
            '喜ばれるが、その時だけ',
            '自分の印象が好くなる',
            'URの価値が上がりリピーターや紹介が増える'  
        ],
        correct: 'URの価値が上がりリピーターや紹介客が増える'  
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





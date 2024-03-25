const home = document.querySelector("#home");
const sumSelectButton = document.querySelector("#sumSelectButton"); //足し算選択ボタンを取得
const subSelectButton = document.querySelector("#subSelectButton"); //引き算選択ボタンを取得
const homeButtons = document.getElementsByClassName("homeButton");

const sum = document.querySelector("#sum");
const sub = document.querySelector("#sub");
const sumQuestions = document.getElementsByClassName("question"); //足し算問題をHTMLcollectionで取得
const sumJudgeButton = document.getElementById("sumJudgeButton"); //足し算問題のこたえあわせボタンを取得
const sumNextButton = document.getElementById("sumNextButton"); //足し算問題のつぎのもんだいボタンを取得
const sumAnses = document.getElementsByClassName("sumAns"); //足し算問題の答えをHTMLcollectionで取得
const miss = document.getElementById("miss");
const allCorrectImg = document.querySelector("#allCorrect");
console.log("questions", sumQuestions, "sumJugeButton", sumJudgeButton, "sumNextButton", sumNextButton, "allCorrectImg", allCorrectImg);
console.log(allCorrectImg.style.display);


sumSelectButton.addEventListener("click", sumSelect);

function sumSelect() {
    nextQuestion();
    home.style.display = "none";
    sum.style.display = "block";
    sub.style.display = "none";
}

subSelectButton.addEventListener("click", subSelect);

function subSelect() {
    subNextQuestion();
    home.style.display = "none";
    sum.style.display = "none";
    sub.style.display = "block";
}

homeButtons[0].addEventListener("click", homeSelect);
homeButtons[1].addEventListener("click", homeSelect);

function homeSelect() {
    home.style.display = "block";
    sum.style.display = "none";
    sub.style.display = "none";
}



// 足し算問題のこたえあわせボタンがクリックされたときのイベント
sumJudgeButton.addEventListener("click", judgement);
// 足し算問題のこたえあわせボタンがクリックされたときのイベントの処理
function judgement() {
    let allCorrectFlag = true;

    for (const question of sumQuestions) {
        const nums = question.getElementsByTagName("span");
        const ans = question.querySelector("input");
        const judge = question.querySelector("em");
        
        if (Number(nums[0].innerText) + Number(nums[1].innerText) === Number(ans.value)) {
            judge.innerText = "⭕";
        } else {
            judge.innerText = "❌";
            allCorrectFlag = false;
        }
    }
    if (allCorrectFlag) {
        allCorrectImg.style.display = "inline-block";
        miss.style.display = "none";
    } else {
        miss.style.display = "inline-block";
        allCorrectImg.style.display = "none";
    }
}


//足し算問題のつぎのもんだいボタンをクリックしたときのイベント
sumNextButton.addEventListener("click", nextQuestion);
//足し算問題のつぎのもんだいボタンをクリックしたときのイベント処理
function nextQuestion() {
    allCorrectImg.style.display = "none";
    miss.style.display = "none";

    for (const question of sumQuestions) {
        const nums = question.getElementsByTagName("span");
        let ans = question.querySelector("input");
        let judge = question.querySelector("em");
        ans.value = "";
        judge.innerText = "";

        for (const num of nums) {
            num.innerText = Math.floor(Math.random() * 11);
        }
    }
}




const subQuestions = document.getElementsByClassName("subQuestion"); //引き算問題をHTMLcollectionで取得
const subJudgeButton = document.getElementById("subJudgeButton"); //引き算問題のこたえあわせボタンを取得
const subNextButton = document.getElementById("subNextButton"); //引き算問題のつぎのもんだいボタンを取得
const subAnses = document.getElementsByClassName("subAns"); //引き算問題の答えをHTMLcollectionで取得
const subMiss = document.getElementById("subMiss");
const subAllCorrectImg = document.querySelector("#subAllCorrect");



// 引き問題のこたえあわせボタンがクリックされたときのイベント
subJudgeButton.addEventListener("click", subJudgement);
// 引き算問題のこたえあわせボタンがクリックされたときのイベントの処理
function subJudgement() {
    let allCorrectFlag = true;

    for (const question of subQuestions) {
        const nums = question.getElementsByTagName("span");
        const ans = question.querySelector("input");
        const judge = question.querySelector("em");
        
        if (Number(nums[0].innerText) - Number(nums[1].innerText) === Number(ans.value)) {
            judge.innerText = "⭕";
        } else {
            judge.innerText = "❌";
            allCorrectFlag = false;
        }
    }
    if (allCorrectFlag) {
        subAllCorrectImg.style.display = "inline-block";
        subMiss.style.display = "none";
    } else {
        subMiss.style.display = "inline-block";
        subAllCorrectImg.style.display = "none";
    }
}

//引き算問題のつぎのもんだいボタンをクリックしたときのイベント
subNextButton.addEventListener("click", subNextQuestion);
//引き算問題のつぎのもんだいボタンをクリックしたときのイベント処理
function subNextQuestion() {
    subAllCorrectImg.style.display = "none";
    subMiss.style.display = "none";

    for (const question of subQuestions) {
        const nums = question.getElementsByTagName("span");
        let ans = question.querySelector("input");
        let judge = question.querySelector("em");
        ans.value = "";
        judge.innerText = "";

        for (const num of nums) {
            num.innerText = Math.floor(Math.random() * 11);
        }
    }
}

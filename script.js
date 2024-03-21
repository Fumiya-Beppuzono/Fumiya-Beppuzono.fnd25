const sumQuestions = document.getElementsByClassName("question"); //足し算問題をHTMLcollectionで取得
const sumJudgeButton = document.getElementById("sumJudgeButton"); //足し算問題のこたえあわせボタンを取得
const sumNextButton = document.getElementById("sumNextButton"); //足し算問題のつぎのもんだいボタンを取得
console.log("questions", sumQuestions, "sumJugeButton", sumJudgeButton, "sumNextButton", sumNextButton);
const sumAnses = document.getElementsByClassName("sumAns"); //足し算問題の答えをHTMLcollectionで取得
// console.log(sumAnses);

// 足し算問題をランダムに生成
for (const question of sumQuestions) {
    const nums = question.getElementsByTagName("span");
    for (const num of nums) {
        num.innerText = Math.floor(Math.random() * 100);
    }
}

// 足し算問題のこたえあわせボタンがクリックされたときのイベント
sumJudgeButton.addEventListener("click", judgement);
// 足し算問題のこたえあわせボタンがクリックされたときのイベントの処理
function judgement() {
    for (const question of sumQuestions) {
        const nums = question.getElementsByTagName("span");
        const ans = question.querySelector("input");
        const judge = question.querySelector("em");

        if (Number(nums[0].innerText) + Number(nums[1].innerText) === Number(ans.value)) {
            judge.innerText = "⭕";
        } else {
            judge.innerText = "❌";
        }
    }
}
// const question = questions[0];
// const ans = question.querySelector("input");
// console.log(ans.value);

//足し算問題のつぎのもんだいボタンをクリックしたときのイベント
sumNextButton.addEventListener("click", nextQuestion);
//足し算問題のつぎのもんだいボタンをクリックしたときのイベント処理
function nextQuestion() {
    for (const question of sumQuestions) {
        const nums = question.getElementsByTagName("span");
        let ans = question.querySelector("input");
        let judge = question.querySelector("em");
        ans.value = "";
        judge.innerText = "";

        for (const num of nums) {
            num.innerText = Math.floor(Math.random() * 100);
        }
    }
    // window.alert("つぎのもんだいボタンがクリックされました")
}

let data = [
  {
    Q: "Q : JS is used For?",
    a: "Frontend",
    b: "Animation",
    c: "Dynamically update Content",
    d: "Backend",
    ans: "ans3",
  },
  {
    Q: "Q : Fullform of JS ?",
    a: "JavaScript",
    b: "JavaSience",
    c: "JavaS",
    d: "Javasecure",
    ans: "ans1",
  },
  {
    Q: "Q : who developed JS ?",
    a: "santa",
    b: "brendan Eich",
    c: "george",
    d: "Neck",
    ans: "ans2",
  },
  {
    Q: "Q : When JS develope ?",
    a: "1995",
    b: "1990",
    c: "1999",
    d: "1892",
    ans: "ans1",
  }
];

let question = document.getElementById("qns");
let option1 = document.querySelector(".opt1");
let option2 = document.querySelector(".opt2");
let option3 = document.querySelector(".opt3");
let option4 = document.querySelector(".opt4");

let answers = document.querySelectorAll(".options");
let myScore = document.querySelector(".score");
let score = 0;
let num = 0;
let nextBtn = document.querySelector(".next");

question.innerHTML = data[num].Q;
option1.innerHTML = data[num].a;
option2.innerHTML = data[num].b;
option3.innerHTML = data[num].c;
option4.innerHTML = data[num].d;

function checkAns() {
  let ans;
  answers.forEach((curElement) => {
    if (curElement.checked) {
      ans = curElement.id
      console.log(ans);
    }
  })
  return ans;
}

function disSelect(){
    answers.forEach((curElement)=>{
        curElement.checked=false;
    })
}
function next() {
  let checkedAns = checkAns()

  if (checkedAns === data[num].ans) {
    score++;
  }
 disSelect();
  num++;
  if (num < data.length) {
     
    question.innerHTML = data[num].Q;
    option1.innerHTML = data[num].a;
    option2.innerHTML = data[num].b;
    option3.innerHTML = data[num].c;
    option4.innerHTML = data[num].d;
  } else {
    
    myScore.innerHTML = `You Scored ${score}/${data.length} <br/> <br/>
        <button onclick="location.reload()">Play Again</button>`;
        nextBtn.style.display = "none";

        document.querySelector(".btn").style.backgroundColor="lightblue";
       
  }
}

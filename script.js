const signupBtn = document.querySelectorAll(".sign-up-button");
const ans = document.querySelectorAll(".answer");
const ques = document.querySelectorAll(".question");

ques.forEach((question,index)=>{
    question.addEventListener("click",() => toggleAnswer(index));
});

function toggleAnswer(index){

    if(ans[index].style.display == "block"){
        ques[index].children[1].classList.remove("fa-xmark");
        ques[index].children[1].classList.add("fa-plus");
        ans[index].style.display = "none";
    }
    else{
        ques[index].children[1].classList.remove("fa-plus");
        ques[index].children[1].classList.add("fa-xmark");
        ans[index].style.display = "block";
    }
}

signupBtn.forEach((btn)=>{
    btn.addEventListener("click", function(){
        window.location.href = './signUp.html';
    })
})
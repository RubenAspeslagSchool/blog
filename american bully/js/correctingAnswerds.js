

document.getElementById("score").toggleAttribute("hidden");

function correct(e) {
    e.preventDefault();

    score = 0;

    // Question 1

    if (document.getElementById("q1A").checked) {
        score++;
        document.getElementById("q1").style.color = "green";
    } else {
        document.getElementById("q1").style.color = "red";
    }

    // Question 2

   
    if (document.getElementById("q2A").checked && 
        ! (document.getElementById("q2B").checked) &&
        ! (document.getElementById("q2C").checked) && 
        document.getElementById("q2D").checked  &&
        !(document.getElementById("q2E").checked)
        ) {
        score++;
        document.getElementById("q2").style.color = "green";
    } else {
        document.getElementById("q2").style.color = "red";
    }

    // Question 3

    if (document.getElementById("q3B").checked) {
        score++;
        document.getElementById("q3").style.color = "green";
    } else {
        document.getElementById("q3").style.color = "red";
    }

    // Question 4

    if (document.getElementById("q4C").checked) {
        score++;
        document.getElementById("q4").style.color = "green";
    } else {
        document.getElementById("q4").style.color = "red";
    }


    // Question 5

    if (document.getElementById("q5B").checked) {
        score++;
        document.getElementById("q5").style.color = "green";
    } else {
        document.getElementById("q5").style.color = "red";
    }

    // Display score
    console.log(score);
    document.getElementById("score").toggleAttribute("hidden");
    document.getElementById("score").innerHTML =   score + " / 5";

    // Display correct answers
    correctAnswers = document.querySelectorAll(".correctAnswer");
    console.log(correctAnswers);
    correctAnswers.forEach(correctAnswer => {
        correctAnswer.classList.toggle("hidden");
    });


}
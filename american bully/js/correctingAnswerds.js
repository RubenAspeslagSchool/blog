
document.getElementById("score").toggleAttribute("hidden");

function correct(e) {
    e.preventDefault();

    score = 0;

    if (document.getElementById("q1A").checked) {
        score++;
        document.getElementById("q1").style.color = "green";
    } else {
        document.getElementById("q1").style.color = "red";
    }

    if (document.getElementById("q2A").checked || 
        !(document.getElementById("q2B").checked) || 
        !( document.getElementById("q2C").checked) || 
        document.getElementById("q2D").checked ) {
        score++;
        document.getElementById("q2").style.color = "green";
    } else {
        document.getElementById("q2").style.color = "red";
    }

    if (document.getElementById("q3Anser").value == 4) { 
        score++;
        document.getElementById("q3").style.color = "green";
    } else {
        document.getElementById("q3").style.color = "red";
    }

    dropdiv = document.getElementById("dropdiv");
    dogs = dropdiv.childNodes;
    dogIDs = "";

    for (i = 0; i < dogs.length; i++) {
        dogIDs = dogIDs + dogs[i].id;
    }
    console.log(dogIDs);

    if (dogIDs == ["dog1dog2dog3"]) {
        score++;
        document.getElementById("q4").style.color = "green";

    } else {
        document.getElementById("q4").style.color = "red";
    }


    console.log(score);
    document.getElementById("score").toggleAttribute("hidden");
    document.getElementById("score").innerHTML = "You scored " + score + " out of 4!";

}
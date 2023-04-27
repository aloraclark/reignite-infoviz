//this script handles showing if the user got the right answer to the initial question
function respondToUser() {
    var number = document.getElementById("question-1").value;
    var response = "";
    if (number == 1) {response = "You are correct! Keep scrolling to find out more!";}
    else if(number <= 0) {response = "Aww! Have a little more faith. Keep scrolling to find out the correct answer!";}
    else {response = "Unfortunately, you are incorrect :( Keep scrolling...the answer might surprise you!";}
    document.getElementById("response").innerHTML = response;
}
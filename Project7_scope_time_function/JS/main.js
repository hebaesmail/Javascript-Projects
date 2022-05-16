function get_Date() {
    if (new Date().getHours() <18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Age_Function() {
    Age = document.getElementById("Age") .value;
    if (Age >= 18){
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon time!";
    }
    else {
        Reply= "It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

console.log(Error_Function());
function Error_Function() {
    document.getElementById("Error") .innerHTML = Count();
    function Count() {
        var Starting_point = 4;
        function Plus_one() (Starting_ponit += 1;)
        Plus_one();
        return Starting_point;
    }
}
function full_sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //Formulates strings into a full message
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_method() {
    var Sentence = "All work and no play has makes Johnny a dull boy";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice") .innerHTML = Section; //Splits a sentence into parts
}

function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12938.573948373;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
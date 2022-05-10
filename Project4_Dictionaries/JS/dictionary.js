function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    delete Animal.Age //Deletes the Animals Age
    document.getElementById("Dictionary") .innerHTML = Animal.Sound;
}
var userAge = parseInt(prompt("How old are you?"), 10);
if (isNaN(userAge)) {
    console.log("You didn't enter a number");
}
else if (userAge < 18) {
    console.log("You are a minor. You are not allowed to enter.");
}
else {
    console.log("Welcome to the website!");
}
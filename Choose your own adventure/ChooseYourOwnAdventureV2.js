var user = prompt("Would you like to choose your own adventure?").toLowerCase();
switch (user) {
    case "yes":
        console.log("Prepare for the journey of a lifetime.");
        var strong = prompt("Are you strong?").toLowerCase();
        var smart = prompt("Are you smart?").toLowerCase();
        if (smart == "yes" && strong == "yes") {
            console.log("You continue down the pathway alive.");
        }
        else if (smart == "no" || strong == "no") {
            console.log("You were not suited to survive. You died quickly.");
        }
        else {
            console.log("Spaghetti monsters fly from nowhere and burn everything down. You died.");
        }
        break;

    case "no":
        console.log("That's okay. Have fun doing whatever else you were going to do.");
        break;
    case "":
        console.log("You didn't give a response.");
        break;
    default:
        console.log("I didn't understand your response.");
        break;
}
var text = " I'm lucky to have two amazing ladies to call mom. I love you both and I'm so glad you're in my life. You two have helped me grow into the woman I am. HAPPY MOTHER'S DAY!!! Jim P.S., Happy Mother's Day to all the other amazing mothers I know out there who have been there for me in a motherly way and have also shaped me into someone amazing.";

var myName = "Jim";
var hits = [];

for (var i = 0; i < text.length; i++) {
    if (text[i] == myName[0]) {
        for (var k = i; k < i + myName.length; k++) {
            hits.push(text[k]);
        }
    }
}
if (hits.length === 0) {
    console.log("Your name wasn't found.");
}
else {
    console.log(hits);
}
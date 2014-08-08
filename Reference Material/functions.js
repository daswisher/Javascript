//Functions are created the same way that variables are within JavaScript
//The function can take in parameters even though it doesn't necessarily need to

var sleepCheck = function(numHours){
	if(numHours>=8){
		return "That's plent of sleep!";
	}
	else{
		return "Get more sleep!";
	}
};

sleepCheck(10);
sleepCheck(5);

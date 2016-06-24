
//When a number is selected to practice with this function is called
function chooseTableNum(){
	isPicked = true;					//Make sure a number is picked
	listNumber = event.target.innerHTML;//The number is set to the value of number in the list
	generateMultiple();					//Generate random number from 1-10 to multiply against our chosen number
	
}




//Generate a new random number
function generateMultiple(){			
	
	if (isPicked == true) {									//Make sure a number is picked
	multiple = Math.floor((Math.random() * 10) + 1);		//Set the random number from 1 to 10
	document.getElementById('multiple').innerHTML = multiple + ' x ' + listNumber;//Set the value of the HTML element 'multiple', to be this
	}
}








//Function to check if the right answer is entered
function compareAnswer(){
	var answer = document.getElementById('answer').value;//Takes the input from the form
	correct = listNumber * multiple;
	
	
	 if(answer == correct){
		alert('true');
	}
	else{
		alert('false');
		}
}
var isPicked = false;
var listNumber;
var correct;
var multiple

//getting form
var form = document.getElementById('enter');
//Listening for the form to be submitted
form.addEventListener('submit', compareAnswer, false);

var list = document.getElementById('list');
list.addEventListener('click', chooseTableNum, false);




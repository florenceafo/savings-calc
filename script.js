var currentDate = 0;
var month = 0;
var year = 0;
var useSavingsGoal = 0;
var useSavingsReg = 0;
var useSavingsHave = 0;
var net = 0;
var noMonths = 0;
var yearsTake = 0;
var monthsTake = 0;
var newMonth = 0;
var newYear = 0;
var newMonthName = "";
var goalDate = "";

// current date
currentDate = new Date();
month = currentDate.getMonth()+1; // January = 0
console.log(month);
year = currentDate.getFullYear();
console.log(year);

// user inputs
function getSavings() {
	useSavingsGoal = document.getElementById("inputSavingsGoal"); // savings goal
	console.log(useSavingsGoal.value);
	useSavingsReg = document.getElementById("inputSavingsReg"); // saving monthly
	console.log(useSavingsReg.value);
	useSavingsHave = document.getElementById("inputSavingsHave"); // saved so far
	console.log(useSavingsHave.value);
}

// calculate the date
function getDate() {
	net = useSavingsGoal.value - useSavingsHave.value;
	console.log(net);
	noMonths = net / useSavingsReg.value
    if (Number.isInteger(noMonths)) {
        noMonths = net / useSavingsReg.value;
    } else {
        noMonths = (net / useSavingsReg.value) + 1;
    }
	console.log(noMonths);
	if ( noMonths < 12 ){
		yearsTake = 0
		monthsTake = Math.trunc(noMonths)
        if (noMonths == 1 ) {
            timeTake.innerHTML = "It will take " + monthsTake + " month.";
        } else {
            timeTake.innerHTML = "It will take " + monthsTake + " months.";
        }
	} else if ( noMonths % 12 == 0 && noMonths >= 12  ) {
		yearsTake = noMonths / 12
		monthsTake = 0
        if (yearsTake == 1) {
            timeTake.innerHTML = "It will take " + yearsTake + " year.";
        } else {
            timeTake.innerHTML = "It will take " + yearsTake + " years.";
        }
	} else if ( noMonths >= 12 ) {
		yearsTake = Math.trunc(noMonths / 12)
		monthsTake = Math.trunc(noMonths % 12)
        if (yearsTake == 1 && monthsTake == 1) {
            timeTake.innerHTML = "It will take " + yearsTake + " year and " + monthsTake + " month.";
        } else if (yearsTake == 1 ) {
            timeTake.innerHTML = "It will take " + yearsTake + " year and " + monthsTake + " months.";
        } else if (monthsTake == 1 ) {
            timeTake.innerHTML = "It will take " + yearsTake + " years and " + monthsTake + " month.";
        } else {
            timeTake.innerHTML = "It will take " + yearsTake + " years and " + monthsTake + " months.";
        }
	}
	console.log(yearsTake);
	console.log(monthsTake);
	yearsTake.value
	return yearsTake, monthsTake;
}

function getGoalDate() {
	if ( monthsTake + month < 12) {
        newMonth = monthsTake + month
        newYear = year + yearsTake
    } else if (monthsTake + month == 12) {
        newYear = year + yearsTake + 1 // January = 0
        newMonth = month
    } else {
        newYear = year + yearsTake + 1
        newMonth = monthsTake + month - 11
    }
    console.log(newMonth);
    console.log(newYear);
    switch (newMonth) {
        case 1:
            newMonthName = "January"
            break;
        case 2:
            newMonthName = "February"
            break;
        case 3:
            newMonthName = "March"
            break;
        case 4:
            newMonthName = "April"
            break;
        case 5:
            newMonthName = "May"
            break;
        case 6:
            newMonthName = "June"
            break;
        case 7:
            newMonthName = "July"
            break;
        case 8:
            newMonthName = "August"
            break;
        case 9:
            newMonthName = "September"
            break;
        case 10:
            newMonthName = "October"
            break;
        case 11:
            newMonthName = "november"
            break;
        case 12:
            newMonthName = "December"
            break;
        default:
            console.log("error");
	 }
	console.log(newMonthName);
	goalDate = document.getElementById('goalDate').innerHTML = "You will reach your goal by " + newMonthName + " " + newYear;
}

function calculate() {
	getSavings()
	getDate()
	getGoalDate()
}

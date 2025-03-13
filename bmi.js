// alert("hey");

function calculateBMi() {
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value

    let bmi = weight / (height/100) * 2;
    let resultMsg = "your BMI is " + bmi.toFixed(2) // toFixed(2) decides  the value after decimal [exp: 45.33, 23.77]

// normal bmi should be between 18.5 - 25
    if(bmi < 18.5) {
         resultMsg = resultMsg + " , so you are underweight"
    }
    else if(bmi > 18.6 && bmi < 24.9) {
        resultMsg = resultMsg + " , so you have a normal weight"
    }
    else if(bmi > 25) {
        resultMsg = resultMsg + " , so you are overweight"
    }
    else {
        resultMsg = "Enter a invalid height & weight"
    }

    document.getElementById('result').innerHTML = resultMsg;
}

// calculateBMi();
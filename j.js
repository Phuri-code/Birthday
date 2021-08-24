function National_institutes_of_Healthy(weigth, height){
    var BMI= weigth / height**2 ;
    if(BMI < 18.5)  {
        console.log("your weight is ",BMI,"you are less than 18.5.","it's mean you are underweight.");
    }
    else if(BMI >= 18.5 && BMI <= 24.9) {
        console.log("your weight is ",BMI,"It's mean you are ideal.");
    }
    else if( BMI >=25 && BMI <= 29.9){
        console.log("your weight is",BMI,"It's mean you are overweight.");
    }
    else{
        console.log("your weight is",BMI,"It's mean you are obesity");
    }
  }
 National_institutes_of_Healthy(51, 1.67);



 
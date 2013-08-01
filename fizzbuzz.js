function FizzBuzz($scope) {

    $scope.output = [  
    ];
    
    var Fizz = {

        check : function (num){ return num % 3 == 0;},
        toString : function () { return "Fizz";}
       
    };

   var Buzz =  {
       check : function (num){return num % 5 == 0;},
       toString : function () {return "Buzz";}
        
   };
    
   var FizzBuzz = {
       check: function (num) { return Buzz.check(num) && Fizz.check(num); },
       toString: function () { return "FizzBuzz";}
   };

   function translate(num) {
       var results = num;
       if (FizzBuzz.check(num)) {
           results = FizzBuzz.toString();
       }
       else if (Fizz.check(num) == true) {
           results = Fizz.toString();
       }
       else if (Buzz.check(num) == true) {
           results = Buzz.toString();
       }
       return results;
   }

    Begin();

    function Begin() {
 
        for (var x = 1; x <= 100; x++) {
            $scope.output.push({ text : translate(x) });
        }
    }

}
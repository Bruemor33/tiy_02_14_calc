(function (){
  "use strict";

console.log('hello');

  function click(event){

    var numberInput = document.querySelector('.number');
    var viewerPrint = document.getElementById('viewer');

    numberInput.addEventListener('click', function(event){
      viewerPrint.textContent = numberInput;
      console.log('it worked');
    });
  }

//short cut to get elements
  // var el = function(element){
  //   if (element.charAt(0) === '#'){
  //     //if passed an ID
  //     return
  //     document.querySelector(element);
  //   }
  //   //returns single element
  //   return
  //   document.querySelectorAll(element);
  //   //otherwise returns a nodelist
  // }

  // var viewer = el('#viewer'),
  // //screen where result is displayed
  //     equals = el('#equals'), //equals button
  //     number = el('.number'), //list of numbers
  //     ops = el('.ops'), //list of operators
  //     theNum = '', //current number
  //     oldNum = '', //last number
  //     resultNum, //result
  //     operator;

      //when number is clicked, get the current selected
  // var setNumber = function(){
  //   if (resultNum) {
  //     theNum =
  //     this.getAttribute('data-num');
  //     resultNum = '';
  //   }else{
  //     theNum +=
  //     this.getAttribute('data-num');
  //   }
  //   viewer.innerHTML = theNum;
  // };

  //adding click event because idk what i'm doing. I just want my numbers to print to viewer.
  // for (var i = 0, l = number.length; i < l; i++){
  //   number[i].onclick = setNum;
  //   console.log('it works');
  // }
click();
}());

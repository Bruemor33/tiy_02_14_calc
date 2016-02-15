(function (){
  "use strict";

  var el = function(element){
    if (element.charAt(0) === '#'){
      return
      document.querySelector(element);
    }
    return
    document.querySelectorAll(element);
  }

}());

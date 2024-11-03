let calculation = localStorage.getItem('calculation') || '';

      function updateCalculation(value) {
        calculation += value;
       total();
        console.log(calculation);
        saveCalculation();
      }

      function saveCalculation() {
        localStorage.setItem('calculation', calculation);
      }
      function total(){
        const inputElement=document.querySelector('.js-input');
        inputElement.value =calculation;
        }
      function clear1(){

        calculation='';
        total();
        saveCalculation();
       
      }
      function del(){
        calculation = calculation.slice(0, -1);
        total();
        saveCalculation();
      }
      function enter(){   try {
        calculation = calculation.replace(/\^/g, '**');
        calculation = eval(calculation).toString();
        total();
        saveCalculation();
    } catch (error) {
        console.error("Invalid calculation");
        calculation = 'Error';
        total();
    }
    
   }
      function power(n) {
        calculation = (Math.pow(parseFloat(calculation), n)).toString();
        total();
        saveCalculation();
    }
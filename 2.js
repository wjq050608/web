function all() {
    var p0 = document.getElementById("price0").innerHTML;
    var p1 = document.getElementById("price1").innerHTML;
    var p2 = document.getElementById("price2").innerHTML;
    var p3 = document.getElementById("price3").innerHTML;
    var p4 = document.getElementById("price4").innerHTML;
    var p5 = document.getElementById("price5").innerHTML;
    var p6 = document.getElementById("price6").innerHTML;
    var p7 = document.getElementById("price7").innerHTML;
    var jg0 = parseFloat(p0.substring(1));
    var jg1 = parseFloat(p1.substring(1));
    var jg2 = parseFloat(p2.substring(1));
    var jg3 = parseFloat(p3.substring(1));
    var jg4 = parseFloat(p4.substring(1));
    var jg5 = parseFloat(p5.substring(1));
    var jg6 = parseFloat(p6.substring(1));
    var jg7 = parseFloat(p7.substring(1));
  
    document.getElementById("totalPrice").innerHTML = "£" + (jg0 + jg1 + jg2 + jg3 + jg4 + jg5 + jg6 + jg7);
  }
  
  function plus(index) {
    var danjia = parseFloat(document.getElementsByName("price")[index].value);
    var sum = parseInt(document.getElementsByName("amount")[index].value);
  sum++;
    document.getElementsByName("amount")[index].value = sum ;
    var money = danjia * 100 * sum / 100;
    document.getElementById("price" + index).innerHTML = "£" + money;
    all();
  }
  function minus(index) {
    var dj = parseFloat(document.getElementsByName("price")[index].value);
    var sum = parseInt(document.getElementsByName("amount")[index].value);
    if (sum == 0) {
      alert("The quantity of goods cannot be further reduced")
    } else {
  sum--;
      document.getElementsByName("amount")[index].value = sum ;
      var money = dj * 100 * sum / 100;
      document.getElementById("price" + index).innerHTML = "£" + money;
      all();
    }
  
  }
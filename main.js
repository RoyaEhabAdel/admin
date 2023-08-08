/*----sidebar toggle----*/
let menu = document.getElementById('menu').addEventListener("click", function(){
    var x = document.getElementById('sideBar');
    if(x.style.display ="none"){
    x.style.display ="block";
    }else if(x.style.display ="block"){
        x.style.display="none";
    }
})
/*----subLists toggle----*/
let sub1 = document.getElementById('subList1').addEventListener("click", function(){
    var x = document.getElementById('Div1');
    if(x.style.display ="none"){
    x.style.display ="block";
    }else if(x.style.display ="block"){
        x.style.display="none";
    }
})
let sub2 = document.getElementById('subList2').addEventListener("click", function(){
    var x = document.getElementById('Div2');
    if(x.style.display ="none"){
    x.style.display ="block";
    }else if(x.style.display ="block"){
        x.style.display="none";
    }
})
let sub3 = document.getElementById('subList3').addEventListener("click", function(){
    var x = document.getElementById('Div3');
    if(x.style.display ="none"){
    x.style.display ="block";
    }else if(x.style.display ="block"){
        x.style.display="none";
    }
})
let sub4 = document.getElementById('subList4').addEventListener("click", function(){
    var x = document.getElementById('Div4');
    if(x.style.display ="none"){
    x.style.display ="block";
    }else if(x.style.display ="block"){
        x.style.display="none";
    }
})
let sub5 = document.getElementById('subList5').addEventListener("click", function(){
    var x = document.getElementById('Div5');
    if(x.style.display ="none"){
    x.style.display ="block";
    }else if(x.style.display ="block"){
        x.style.display="none";
    }
})
let sub6 = document.getElementById('subList6').addEventListener("click", function(){
    var x = document.getElementById('Div6');
    if(x.style.display ="none"){
    x.style.display ="block";
    }else if(x.style.display ="block"){
        x.style.display="none";
    }
})
let sub7 = document.getElementById('subList7').addEventListener("click", function(){
    var x = document.getElementById('Div7');
    if(x.style.display ="none"){
    x.style.display ="block";
    }else if(x.style.display ="block"){
        x.style.display="none";
    }
})
let sub8 = document.getElementById('subList8').addEventListener("click", function(){
    var x = document.getElementById('Div8');
    if(x.style.display ="none"){
    x.style.display ="block";
    }else if(x.style.display ="block"){
        x.style.display="none";
    }
})
let sub9 = document.getElementById('subList9').addEventListener("click", function(){
    var x = document.getElementById('Div9');
    if(x.style.display ="none"){
    x.style.display ="block";
    }else if(x.style.display ="block"){
        x.style.display="none";
    }
})
let sub10 = document.getElementById('subList10').addEventListener("click", function(){
    var x = document.getElementById('Div10');
    if(x.style.display ="none"){
    x.style.display ="block";
    }else if(x.style.display ="block"){
        x.style.display="none";
    }
})

/*----graph----*/
const xValues = ["يناير","فبراير","مارس","ابريل","مايو","يونيه","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [100,100,1250,100,90,95,100,95,100,100,100,100],
      borderColor: "lightblue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});
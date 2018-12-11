var randomNumber = Math.floor(Math.random() * 101 + 19) ;
// console.log(randomNumber)
// console.log(Math.floor(Math.random() * 101 + 19))
var wins
var losses
var crystal1 = Math.floor(Math.random() * 11 + 1);
var crystal2 = Math.floor(Math.random() * 11 + 1);
var crystal3 = Math.floor(Math.random() * 11 + 1);
var crystal4 = Math.floor(Math.random() * 11 + 1);
var playerScore = 0;
var totalScore

console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);

// var min = 19;
// var max = 120;



$(document).ready(function(){

    // function 

$(".button").on("click", function() {


    $(".randomNumber").text(randomNumber);
    // Now we need to get the crystals to randomly hold values of 1-12
   
});

// $(".crystal").on("click", function() {
//     $(".crystal").attr(crystal1);
//     $(".crystal").attr(crystal2);
//     $(".crystal").attr(crystal3);
//     $(".crystal").attr(crystal4);
//     console.log(crystal1);
// });
$(".crystal1").on("click", function() {
    playerScore += crystal1;
    $(".playerScore").text("Your total score is: " +playerScore);
});

$(".crystal2").on("click", function() {
    playerScore += crystal2;
    $(".playerScore").text("Your total score is: " +playerScore);
});

$(".crystal3").on("click", function() {
    playerScore += crystal3;
    $(".playerScore").text("Your total score is: " +playerScore);
});

$(".crystal4").on("click", function() {
    playerScore += crystal4;
    $(".playerScore").text("Your total score is: " +playerScore);
});






    




    
    
    



 


    
    










})




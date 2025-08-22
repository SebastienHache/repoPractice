console.log("Hello there can you read this?");

const btnCalculate = document.getElementById("btnCalculate");

btnCalculate.addEventListener("click", (e) => {
  e.preventDefault();

  let miles = parseFloat(document.getElementById("txtMile").value);
  let gallons = parseFloat(document.getElementById("txtGallon").value);
  let divResult = document.getElementById('divResult');
  let mpg = miles/ gallons;
  console.log(miles, gallons, mpg );


  divResult.innerHTML = `<p>You travelled ${miles} miles and consumed ${gallons} gallons. giving you a MPG of ${mpg}</p>`;
});

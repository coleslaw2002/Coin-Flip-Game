
  var flipButton = document.getElementById('id')("flipButton");

  flipButton.addEventListener('click', function(e))
  {
    flipCoin();
  });

    function flipCoin()
    {
  var flipValue = (heads)(tails);

  var coin = document.getElementById('coin');
  coin.innerHTML = flipValue;

  var numberGuessed = document.getElementById("numberGuess").value;

  if (flipValue == numberGuessed)
  {
    Alert("Correct!");

  } else {
    
    Alert("Wrong...")
  }

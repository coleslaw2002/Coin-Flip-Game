
  var flipButton = document.getElementById('id')("flipButton");

  flipButton.addEventListener('click', function(e))
  {
    flipCoin();
  });

    function flipCoin()
    {
  var flipValue = Math.floor((Math.random() * 2) + 1);

  var coin = document.getElementById('coin');
  coin.innerHTML = flipValue;

  var numberGuessed = document.getElementById("numberGuess").value;

  if (flipValue == numberGuessed)
  {
    Alert("Correct!");

  } else {
    
    Alert("Wrong...")
  }

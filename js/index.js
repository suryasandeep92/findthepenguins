$(document).ready( function() {

    //This code will run after your page loads
    /*
    $("#yeti").mousedown(function() {
        alert("Yaaaarrrr!");
    });
    */
    
    var scorecount = document.getElementById('scoreCount').value;
    var highScore = document.getElementById('highscoreCount').value;
    
    
    
    scorecount = 0;
    highScore = 0;
    
    // Get the modal
    var modal = document.getElementById('gameoverModal');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];


    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        game_over();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            game_over();
        }
    }
    
    
    
    
    var penguinImages = ['images/penguin_1.png','images/penguin_2.png','images/penguin_3.png','images/penguin_4.png','images/penguin_5.png','images/penguin_6.png','images/penguin_7.png','images/penguin_8.png','images/yeti.png'];
    
    var newpenguinImages = shuffle(penguinImages);
    
    
    var hole1 = document.getElementById('penguin1');
    hole1.addEventListener('click', function(){
        PenguinPop(hole1,newpenguinImages[0]);
    },false);
    
    var hole2 = document.getElementById('penguin2');
    hole2.addEventListener('click', function(){
        PenguinPop(hole2,newpenguinImages[1]);
    },false);
    
    var hole3 = document.getElementById('penguin3');
    hole3.addEventListener('click', function(){
        PenguinPop(hole3,newpenguinImages[2]);
    },false);
    
    var hole4 = document.getElementById('penguin4');
    hole4.addEventListener('click', function(){
        PenguinPop(hole4,newpenguinImages[3]);
    },false);
    
    var hole5 = document.getElementById('penguin5');
    hole5.addEventListener('click', function(){
        PenguinPop(hole5,newpenguinImages[4]);
    },false);
    
    var hole6 = document.getElementById('penguin6');
    hole6.addEventListener('click', function(){
        PenguinPop(hole6,newpenguinImages[5]);
    },false);
    
    var hole7 = document.getElementById('penguin7');
    hole7.addEventListener('click', function(){
        PenguinPop(hole7,newpenguinImages[6]);
    },false);
    
    var hole8 = document.getElementById('penguin8');
    hole8.addEventListener('click', function(){
        PenguinPop(hole8,newpenguinImages[7]);
    },false);
    
    var hole9 = document.getElementById('yeti');
    hole9.addEventListener('click', function(){
        PenguinPop(hole9,newpenguinImages[8]);
    },false);
    
    function PenguinPop(e,str)
    {
        if(e.classList.contains('clicked'))
            {
                return;
            }
        else{
                if(str === 'images/yeti.png' )
                    {
                        var animal = 'url('+str+')';
                        e.style.backgroundImage = animal;
                        var yetiGrowl = new Audio('media/yeti.wav');
                        yetiGrowl.play();
            //set the time out function -- after 200 seconds it will pop the Box-Modal Message
                        setTimeout(function () 
                        {
                            //Open Game Over window
                            gameoverMsg.textContent = 'Game Over!';
                            gameoverMsg.setAttribute('style', 'color: red;');
                            gameoverModal.style.display = 'block';
                            newpenguinImages = shuffle(penguinImages);
                        },200);
                    }
                else{
                        var animal = 'url('+str+')';
                        e.style.backgroundImage = animal;
                                var penguinGrowl = new Audio('media/penguin.wav');
                                penguinGrowl.play();

                                scorecount += 1;
                                console.log(scorecount);
                                document.getElementById('scoreCount').value = scorecount;
                                checkScore(scorecount);
                                e.classList.add("clicked");
                                /*if(scorecount === 8 )
                                    {
                                       gameoverMsg.textContent = 'Congratulations!';
                                       gameoverMsg.setAttribute('style', 'color: blue;');
                                       gameoverModal.style.display = 'block'; 
                                       newpenguinImages = shuffle(penguinImages);
                                    }
                                */    

                            if(scorecount > highScore)
                            {
                                document.getElementById('highscoreCount').value = scorecount;
                                highScore = scorecount;
                                checkScore(highScore);
                                /*
                                if(highScore === 8 )
                                    {
                                       gameoverMsg.textContent = 'Congratulations!';
                                       gameoverMsg.setAttribute('style', 'color: blue;');
                                       gameoverModal.style.display = 'block'; 
                                       newpenguinImages = shuffle(penguinImages);
                                    }
                                */    
                            }
                    }
            }
    }
    
    function checkScore(num)
    {
        if(num === 8 )
                            {
                               gameoverMsg.textContent = 'Congratulations!';
                               gameoverMsg.setAttribute('style', 'color: blue;');
                               gameoverModal.style.display = 'block'; 
                               newpenguinImages = shuffle(penguinImages);
                            }
    }
    
    function game_over ()
    {
        
        
        
        var gamepieces = document.getElementsByClassName('gamePieces');
        for (var i = 0; i < gamepieces.length; i++)
            {
                gamepieces[i].style.backgroundImage = '';
                gamepieces[i].classList.remove('clicked');
            }
        
        document.getElementById('scoreCount').value = 0;
        scorecount = 0;
        
    }
    
    function shuffle(array) {
          var currentIndex = array.length, temporaryValue, randomIndex;

          // While there remain elements to shuffle...
          while (0 !== currentIndex) 
          {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;
    }

    
  });
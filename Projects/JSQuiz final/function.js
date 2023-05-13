const myQuestions = [
  {
   'question':  ' It is an electronic, programmable device used to store, process and retrieve data?',
   'answers': ["Smartphone", "Computer","Hard drive", "Calculator"],
   'correct': 1 
  },
  {
   'question': ' It is a type of computer that is normally used for engineering and scientific applications?',
   'answers': ["Mainframes", "Supercomputer", "Minicomputer", "Workstation"],
	 'correct':  1
  },

	{
	 'question': " It is a type of computer typically used as small or mid range servers performing business and scientific applications?",
	 'answers': ["Supercomputer", "Mainframes","Minicomputer", "Laptop"],
	 'correct':  2
	},

	{
	'question': " It is a type of computer that is portable and suitable for mobile use?",
	'answers': ["Workstation", "Supercomputer", "Mainframes", "Laptop"],
	'correct':  3
	},
	{
	'question': " It is considered as the nervous system or the backbone of the computer?",
  'answers': ["Sockets", "Processor", "Motherboard", "Chipsets"],
	'correct': 2
	},
	{
	 'question':	" A computer option that is providing one or more services to serve other computers and devices?",
	 'answers': ["Client", "Terminal", "Workstation", "Server"],
	 'correct': 3
	},
	{
	 'question':" This is a chip that acts as an interface between the main memory, the CPU and other components?",
	 'answers': ["BIOS", "Microchip", "Northbridge", "Southbridge"],
	 'correct': 2
	},
	{
	 'question':" A term used to describe the combination of the Northbridge and the Southbridge?",
	 'answers': ["Peripheral Device", "Chipsets", "Output Device", "CPU"],
	 'correct':  1
	},
	{
	 'question':" It is an expansion card that converts data input into visual display?",
	 'answers': ["Input device", "Video Card", "Audio adapter", "LAN Card"],
	 'correct': 1  
	},
	{
	 'question': " This memory is used inside the computer to hold programs and data while it is running?",
	 'answers': ["RAM", "ROM", "BIOS", "CMOS"],
	 'correct': 0
	}
	];

var score = 0;
var current = 0;

$(document).ready(function(){
  // Create an event listener to listen for a click on the Start Quiz button
  $(".start-button").click(function(){
     $('.start-quiz').hide();
     $('.next').hide();
     $('.questions').show();
     displayQuestion();
      $('.score').text('Current Score: '+score);
    console.log("Start Quiz button clicked");
  });
  
  // Create an event listener to listen for a click on the Next button
  $(".next-button").click(function(event){
    console.log("Next button clicked");
    displayQuestion();
    $('.next').hide();
    $('.submit').show();
  });
  
  $(".submit-button").click(function(event){
    if($('li.selected').length){
      var answer = $('li.selected').attr('id');
      checkAnswer(answer);
      $('.next').show();
      $('.submit').hide();
    } else {
      alert('Please select an answer');
    }
  });
  
  // Create an event listener to listen for a click on the Retake button and refresh the page
  $(".retake-button").click(function(){
  location.reload();
    console.log("Retake button clicked");
  });
  
  //Click listener when clicking on a list item to change the color of the background
  $('ul.list').on('click', 'li', function(event) {
    $('.selected').removeClass();
    $(this).addClass('selected');
  });
  
});

//***************FUNCTIONS**************
function displayQuestion(){
  $('.question-number').text('Question '+(current + 1)+" of 10" );
  if(current < myQuestions.length){
    var listQuestion = myQuestions[current];
    $('h2').text(listQuestion.question);
    $('ul.list').html('');
    for (var i = 0; i < listQuestion.answers.length; i++) {
      $('ul.list').append('<li id = "'+i+'">'+listQuestion.answers[i] +'</li>');
    }
  } else {
    // show summary that says how many you got correct
    displayScore();
  }
}

// Checks answer from the array to see if the one chosen is the one that is correct
function checkAnswer(answer){
  var listQuestion = myQuestions[current];
  if(listQuestion.correct == answer){
    score++;
    $('li.selected').addClass('correct');
  } else {
    $('li.selected').addClass('incorrect') ;
    $('listQuestion.correct').addClass('correct');
  }
  $('.score').text('Current Score: '+score);
  current++;
}

//Display score
function displayScore(){
  $('.questions').hide();
  $('.headline').hide();
  $('.end-quiz').show();
  $('.end-score').text("Your score is: " + score + '/10');
  if(score >= 8){
    $('.comment').text('DEYM PAREH SHESH');
  }
  if(score <=7 ){
    $('.comment').text('Nice try');
  }
  if(score == 0){
    $('.comment').text('okay lang yan itlog')
  }
}
$('#main-container').fadeOut();
  $('#sub').fadeOut();
    var counter = 15;
        setTimeout(countDown,1000);
        function countDown(){ 
          if (counter > 0){
            counter--;  
            $('#time').text('Time: ' + counter + ' sec.');
            setTimeout(countDown,1000);
          }else if (counter == 0){
            result();
            //setTimeout(countDown,1000);
        }
      }
  
  function result(){
//$('#sub').fadeIn();
    var question1 = $("input[name=question1]:checked").val();
    var question2 = $("input[name=question2]:checked").val();
     var question3 = $("input[name=question3]:checked").val();
      var question4 = $("input[name=question4]:checked").val();
       var question5 = $("input[name=question5]:checked").val();
        var question6 = $("input[name=question6]:checked").val();
         var question7 = $("input[name=question7]:checked").val();
          var question8 = $("input[name=question8]:checked").val();
           var question9 = $("input[name=question9]:checked").val();
            var question10 = $("input[name=question10]:checked").val();
    var correct = 0;
    var incorrect = 0;

    if (question1 == '1'){
      correct++;
    }else { incorrect++; }
    if(question2 == '1'){
      correct++;
    }else { incorrect++; }
if(question3 == '1'){
      correct++;
    }else { incorrect++; }
    if(question4 == '1'){
      correct++;
    }else { incorrect++; }
    if(question5 == '1'){
      correct++;
    }else { incorrect++; }
    if(question6 == '1'){
      correct++;
    }else { incorrect++; }
    if(question7 == '1'){
      correct++;
    }else { incorrect++; }
    if(question8 == '1'){
      correct++;
    }else { incorrect++; }
    if(question9 == '1'){
      correct++;
    }else { incorrect++; }
    if(question10 == '1'){
      correct++;
    }else { incorrect++; }
    $('#corr').html(correct);
    $('#inc').html(incorrect);
  }

  $('#sub').on('click', function(){
    result();
    counter = 0;
    // $('#time').text('0')
  })
   $('#start').on('click', function(){
     $('#main-container').fadeIn();
      $('#sub').fadeIn();
      $('#start').fadeOut();
      //$('.container').fadeOut();
      $('#trivia').fadeOut();
      $('.intro-message').css({
"padding-top":"0px"
});
     });
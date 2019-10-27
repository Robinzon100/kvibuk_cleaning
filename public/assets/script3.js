$(document).ready(function(){
  $('.number3 input').mask('(999) 99-99-99');
  a = 2;
  b = 1;
  $('.first3').on('click', '.plus-active', function(){
    a = a + 1;
    if (a == 1) {
      $('.first3 span').text('Коридор и кухня');
      $('.first3 .minus-active').removeClass('minus-active');
    } else if (a == 2) {
      $('.first3 span').text('1-комнатная');
      $('.first3 .minus').addClass('minus-active');
    } else if (a == 3) {
      $('.first3 span').text('2-комнатная');
    } else if (a == 4) {
      $('.first3 span').text('3-комнатная');
    } else if (a == 5) {
      $('.first3 span').text('4-комнатная');
    } else if (a == 6) {
      $('.first3 span').text('5-комнатная');
      $(this).removeClass('plus-active');
    }
  });
  $('.first3').on('click', '.minus-active', function(){
    a = a - 1;
    if (a == 1) {
      $('.first3 span').text('Коридор и кухня');
      $('.first3 .minus-active').removeClass('minus-active');
    } else if (a == 2) {
      $('.first3 span').text('1-комнатная');
      $('.first3 .minus').addClass('minus-active');
    } else if (a == 3) {
      $('.first3 span').text('2-комнатная');
    } else if (a == 4) {
      $('.first3 span').text('3-комнатная');
    } else if (a == 5) {
      $('.first3 span').text('4-комнатная');
      $('.first3 .plus').addClass('plus-active');
    } else if (a == 6) {
      $('.first3 span').text('5-комнатная');
      $(this).removeClass('plus-active');
    }
  });
  $('.second3').on('click', '.plus-active', function(){
    b = b + 1;
    if (b == 1) {
      $('.second3 span').text('1 санузел');
      $('.second3 .minus-active').removeClass('minus-active');
    } else if (b == 2) {
      $('.second3 span').text('2 санузла');
      $('.second3 .minus').addClass('minus-active');
    } else if (b == 3) {
      $('.second3 span').text('3 санузла');
    } else if (b == 4) {
      $('.second3 span').text('4 санузла');
    } else if (b == 5) {
      $('.second3 span').text('5 санузлов');
      $(this).removeClass('plus-active');
    }
  });
  $('.second3').on('click', '.minus-active', function(){
    b = b - 1;
    if (b == 1) {
      $('.second3 span').text('1 санузел');
      $('.second3 .minus-active').removeClass('minus-active');
    } else if (b == 2) {
      $('.second3 span').text('2 санузла');
      $('.second3 .minus').addClass('minus-active');
    } else if (b == 3) {
      $('.second3 span').text('3 санузла');
    } else if (b == 4) {
      $('.second3 span').text('4 санузла');
      $('.second3 .plus').addClass('plus-active');
    } else if (b == 5) {
      $('.second3 span').text('5 санузлов');
    }
  });
  $('.button3').click(function(){
    first = $('.first3 span').text();
    second = $('.second3 span').text();
    number = "+995 " + $('.number3 input').val();
    if (number != '+995 ') {
      $.ajax(
    		{
    			url: 'order3.php',
    			type: 'POST',
    			data:
    			{
    				'first3': first, 'second3': second, 'number3': number
    			},
          success: function(data){
            alert('Ваша заявка успешно отправлена!');
          }
    		});
    } else {
      alert('Введите свой номер телефона!');
    }
  });
});

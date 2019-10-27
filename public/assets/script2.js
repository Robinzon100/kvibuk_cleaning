$(document).ready(function(){
  $('.number2 input').mask('(999) 99-99-99');
  a = 2;
  b = 1;
  $('.first2').on('click', '.plus-active', function(){
    a = a + 1;
    if (a == 1) {
      $('.first2 span').text('Коридор и кухня');
      $('.first2 .minus-active').removeClass('minus-active');
    } else if (a == 2) {
      $('.first2 span').text('1-комнатная');
      $('.first2 .minus').addClass('minus-active');
    } else if (a == 3) {
      $('.first2 span').text('2-комнатная');
    } else if (a == 4) {
      $('.first2 span').text('3-комнатная');
    } else if (a == 5) {
      $('.first2 span').text('4-комнатная');
    } else if (a == 6) {
      $('.first2 span').text('5-комнатная');
      $(this).removeClass('plus-active');
    }
  });
  $('.first2').on('click', '.minus-active', function(){
    a = a - 1;
    if (a == 1) {
      $('.first2 span').text('Коридор и кухня');
      $('.first2 .minus-active').removeClass('minus-active');
    } else if (a == 2) {
      $('.first2 span').text('1-комнатная');
      $('.first2 .minus').addClass('minus-active');
    } else if (a == 3) {
      $('.first2 span').text('2-комнатная');
    } else if (a == 4) {
      $('.first2 span').text('3-комнатная');
    } else if (a == 5) {
      $('.first2 span').text('4-комнатная');
      $('.first2 .plus').addClass('plus-active');
    } else if (a == 6) {
      $('.first2 span').text('5-комнатная');
      $(this).removeClass('plus-active');
    }
  });
  $('.second2').on('click', '.plus-active', function(){
    b = b + 1;
    if (b == 1) {
      $('.second2 span').text('1 санузел');
      $('.second2 .minus-active').removeClass('minus-active');
    } else if (b == 2) {
      $('.second2 span').text('2 санузла');
      $('.second2 .minus').addClass('minus-active');
    } else if (b == 3) {
      $('.second2 span').text('3 санузла');
    } else if (b == 4) {
      $('.second2 span').text('4 санузла');
    } else if (b == 5) {
      $('.second2 span').text('5 санузлов');
      $(this).removeClass('plus-active');
    }
  });
  $('.second2').on('click', '.minus-active', function(){
    b = b - 1;
    if (b == 1) {
      $('.second2 span').text('1 санузел');
      $('.second2 .minus-active').removeClass('minus-active');
    } else if (b == 2) {
      $('.second2 span').text('2 санузла');
      $('.second2 .minus').addClass('minus-active');
    } else if (b == 3) {
      $('.second2 span').text('3 санузла');
    } else if (b == 4) {
      $('.second2 span').text('4 санузла');
      $('.second2 .plus').addClass('plus-active');
    } else if (b == 5) {
      $('.second2 span').text('5 санузлов');
    }
  });
  $('.button2').click(function(){
    first = $('.first2 span').text();
    second = $('.second2 span').text();
    number = "+995 " + $('.number2 input').val();
    if (number != '+995 ') {
      $.ajax(
    		{
    			url: 'order2.php',
    			type: 'POST',
    			data:
    			{
    				'first2': first, 'second2': second, 'number2': number
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

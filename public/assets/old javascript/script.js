$(document).ready(function(){
  $('.number input').mask('(999) 99-99-99');
  a = 2;
  b = 1;
  $('.first').on('click', '.plus-active', function(){
    a = a + 1;
    if (a == 1) {
      $('.first span').text('Коридор и кухня');
      $('.first .minus-active').removeClass('minus-active');
    } else if (a == 2) {
      $('.first span').text('1-комнатная');
      $('.first .minus').addClass('minus-active');
    } else if (a == 3) {
      $('.first span').text('2-комнатная');
    } else if (a == 4) {
      $('.first span').text('3-комнатная');
    } else if (a == 5) {
      $('.first span').text('4-комнатная');
    } else if (a == 6) {
      $('.first span').text('5-комнатная');
      $(this).removeClass('plus-active');
    }
  });
  $('.first').on('click', '.minus-active', function(){
    a = a - 1;
    if (a == 1) {
      $('.first span').text('Коридор и кухня');
      $('.first .minus-active').removeClass('minus-active');
    } else if (a == 2) {
      $('.first span').text('1-комнатная');
      $('.first .minus').addClass('minus-active');
    } else if (a == 3) {
      $('.first span').text('2-комнатная');
    } else if (a == 4) {
      $('.first span').text('3-комнатная');
    } else if (a == 5) {
      $('.first span').text('4-комнатная');
      $('.first .plus').addClass('plus-active');
    } else if (a == 6) {
      $('.first span').text('5-комнатная');
      $(this).removeClass('plus-active');
    }
  });
  $('.second').on('click', '.plus-active', function(){
    b = b + 1;
    if (b == 1) {
      $('.second span').text('1 санузел');
      $('.second .minus-active').removeClass('minus-active');
    } else if (b == 2) {
      $('.second span').text('2 санузла');
      $('.second .minus').addClass('minus-active');
    } else if (b == 3) {
      $('.second span').text('3 санузла');
    } else if (b == 4) {
      $('.second span').text('4 санузла');
    } else if (b == 5) {
      $('.second span').text('5 санузлов');
      $(this).removeClass('plus-active');
    }
  });
  $('.second').on('click', '.minus-active', function(){
    b = b - 1;
    if (b == 1) {
      $('.second span').text('1 санузел');
      $('.second .minus-active').removeClass('minus-active');
    } else if (b == 2) {
      $('.second span').text('2 санузла');
      $('.second .minus').addClass('minus-active');
    } else if (b == 3) {
      $('.second span').text('3 санузла');
    } else if (b == 4) {
      $('.second span').text('4 санузла');
      $('.second .plus').addClass('plus-active');
    } else if (b == 5) {
      $('.second span').text('5 санузлов');
    }
  });
  $('.button').click(function(){
    first = $('.first span').text();
    second = $('.second span').text();
    number = "+995 " + $('.number input').val();
    if (number != '+995 ') {
      $.ajax(
    		{
    			url: 'order.php',
    			type: 'POST',
    			data:
    			{
    				'first': first, 'second': second, 'number': number
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

$(function(){
  $('.load-more').on('click', function(){
    const btn = $(this);
    const loader = btn.find('span');
    $.ajax({
      url: '/assets/layouts/data.html',
      type: 'GET',
      beforeSend: function(){
        btn.attr('disabled', true);
        loader.addClass('.d-inline-block');
        
      },
      success: function(response){
        setTimeout(function(){
          loader.removeClass('.d-inline-block');
          btn.attr('disabled', false);
          $('.after-post').before(response);
        },1000);
      },
      error: function(){
        alert('Error!');
        loader.removeClass('.d-inline-block');
        btn.attr('disabled', false);
      }
    });

  });

});


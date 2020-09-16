$(function() {
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
      interval : 2000
    });
    
    $('#contacto').on('show.bs.modal', function(e){
      console.log('el modal contacto se esta mostrando');
      $('#contactoBtn').removeClass('btn-outline-sucess');
      $('#contactoBtn').removeClass('btn-primary');
      $('#contactoBtn').prop('disabled', true);

    });
  });
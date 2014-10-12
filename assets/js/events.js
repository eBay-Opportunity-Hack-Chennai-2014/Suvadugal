$(function() {
  $('#basicModal').on('shown.bs.modal', function() {
    $('#eventDate').datepicker({
      format: 'mm-dd-yyyy'
    });
  })
});

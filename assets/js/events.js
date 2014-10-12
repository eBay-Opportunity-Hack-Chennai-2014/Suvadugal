var row = '<tr><td>' +
     '<div class="row" style="margin-left:0px">' +
      '<h3>{title} {date} {location} - {contact}</h3>' +
      '<p>{desc}</p>' +
     '</div>' +
     '<div class="row">' +
      '<div class="col-sm-2">' +
       ' <a href="#" class="btn btn-lg btn-primary" data-toggle="modal"' +
       'data-target="#basicModal1">More</a>' +
        '<div class="modal fade" id="basicModal1" tabindex="-1" role="dialog"' +
        'aria-labelledby="basicModal1" aria-hidden="true">' +
         '<div class="modal-dialog model-lg">' +
          '<div class="modal-content">' +
           '   <div class="modal-header">' +
            '  <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>' +
             ' <h4 class="modal-title" id="myModalLabel">About The Event</h4>' +
              '</div>' +
              '<div class="modal-body">' +
               ' <div class="panel panel-default">' +
                ' <div id="RegNGO" class="panel-heading">' +
                 '  <h3>Clicks in the Event</h3>' +
                 '</div>' +
                 '<div class="panel-body">' +
                  ' <div class="row" style="height:150px">' +
                   ' <div class="col-sm-4"><p>Photograph1</p></div>' +
                    '<div class="col-sm-4"><p>Photograph2</p></div>' +
                    '<div class="col-sm-4"><p>Photograph1</p></div>' +
                   '</div>' +
                   '<div class="row" style="height:150px">' +
                    '<h4>Results of the Event</h4>' +
                   '</div>' +
                 '</div>' +
                '</div>' +
   '<div class="panel-body">' +
   '           </div>' +
    '        </div>' +
     '     </div>' +
      '  </div>' +
      '</div> ' +
     '</div>' +
     '</td></tr>';

$(function() {
  $('#basicModal').on('shown.bs.modal', function() {
    $('#eventDate').datepicker({
      format: 'mm-dd-yyyy'
    });
  }),
  $('#btnCreateEvent').on('click', function() {
    var newRow = row;
    var eventTitle = $('#eventName').val();
    var eventLocation = $('#eventLocation').val();
    var eventDate = $('#eventDate').val();
    var desc = $('#textarea').val();
    var mobileNo = $('#mobileNo').val();

    newRow = newRow.replace('{title}', eventTitle);
    newRow = newRow.replace('{date}', eventDate);
    newRow = newRow.replace('{location}', eventLocation);
    newRow = newRow.replace('{desc}', desc);
    newRow = newRow.replace('{contact}', mobileNo);

    $('#eventstbl tbody tr:first').before(newRow);

    $('#basicModal').modal('hide');
  }),
  $('#createEventLnk').on('click', function() {
    $('#eventName').val("");
    $('#eventLocation').val("");
    $('#eventDate').val("");
    $('#textarea').val("");
    $('#mobileNo').val("");
  })
});

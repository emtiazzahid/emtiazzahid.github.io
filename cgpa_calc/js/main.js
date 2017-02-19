$( "#addRow" ).click(function() {
$('#form_table tbody tr:last').after('<tr><td>'+
    '<select name="credit[]" id="credit" class="form-control">'+
    '<option value="0.75">0.75</option>'+
                                      '<option value="1.50">1.50</option>'+
                                      '<option value="3.00">3.00</option>'+
                                  '</select>'+
                                  '</td>'+
                                  '<td>'+
                                  '<select name="grade[]" id="grade" class="form-control">'+
                                      '<option value="4.00">A+</option>'+
                                      '<option value="3.75">A</option>'+
                                      '<option value="3.50">A-</option>'+
                                  '</select>'+
                                  '</td></tr>');
      });
$('#showValues').click(function(){
    var a = [];
    var b = [];
    var sum = 0;
    var total_credit = 0;
    var result = 0;
    $('select[name^="credit"]').each(function() {
        a.push($(this).val());
    }); 
    $('select[name^="grade"]').each(function() {
        b.push($(this).val());
    });

   
    var c = a.map(function(x, index) {
      total_credit = parseFloat(total_credit) + parseFloat(x);
      var Mul = x * b[index];
      sum += Mul;
      return sum;
    });
    result = (parseFloat(sum)/total_credit);
    $('#result').text('Result: ' + result.toFixed(2))
})
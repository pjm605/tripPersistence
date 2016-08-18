


  $(function(){

  // jQuery selects
  var $optionsPanel = $('#options-panel');
  var $hotelSelect = $optionsPanel.find('#hotel-choices');
  var $restaurantSelect = $optionsPanel.find('#restaurant-choices');
  var $activitySelect = $optionsPanel.find('#activity-choices');

  // make all the option tags (second arg of `forEach` is a `this` binding)
  hotels.forEach(makeOption, $hotelSelect);
  restaurants.forEach(makeOption, $restaurantSelect);
  activities.forEach(makeOption, $activitySelect);

  function makeOption (databaseAttraction) {

    //console.log(databaseAttraction);
   $.ajax({
      method: 'GET',
      url: '/api/'+ databaseAttraction.type
    })
    .then(function (responseData) {

      responseData.forEach(function(list){
  
        var $option = $('<option></option>')
        .text(list.name)
        .val(list.id)

        $('select').append($option)



     
      })
    })
    .catch( console.error.bind(console) );

  }


});
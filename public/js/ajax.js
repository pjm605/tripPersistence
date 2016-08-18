

  var $optionsPanel = $('#options-panel');
  var $hotelSelect = $optionsPanel.find('#hotel-choices');
  var $restaurantSelect = $optionsPanel.find('#restaurant-choices');
  var $activitySelect = $optionsPanel.find('#activity-choices');

  
   $.ajax({
      method: 'GET',
      url: '/api/hotels'
    })
    .then(function (responseData) {

      responseData.forEach(function(list){
  
        var $option = $('<option></option>')
        .text(list.name)
        .val(list.id)
        $hotelSelect.append($option)
     
      })
    })
    .catch( console.error.bind(console) );

  $.ajax({
      method: 'GET',
      url: '/api/restaurants'
    })
    .then(function (responseData) {

      responseData.forEach(function(list){
  
        var $option = $('<option></option>')
        .text(list.name)
        .val(list.id)
        $restaurantSelect.append($option)
     
      })
    })
    .catch( console.error.bind(console) );

     $.ajax({
      method: 'GET',
      url: '/api/activities'
    })
    .then(function (responseData) {

      responseData.forEach(function(list){
  
        var $option = $('<option></option>')
        .text(list.name)
        .val(list.id)
        $activitySelect.append($option)
     
      })
    })
    .catch( console.error.bind(console) );





$.get('/api/days')
.then(function (data) { console.log('GET response data', data) })
.catch(console.error.bind(console));
// should log an empty array
$.post('/api/days')
.then(function (data) { console.log('POST response data', data) })
.catch(console.error.bind(console));
// should log a new day
$.get('/api/days')
.then(function (data) { console.log('GET response data', data) })
.catch(console.error.bind(console));




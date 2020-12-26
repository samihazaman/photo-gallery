var flowers = ["https://images.unsplash.com/photo-1561826336-37bdb1339994?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", "https://images.unsplash.com/photo-1603387464762-3edd559871e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80", "https://images.unsplash.com/photo-1519064438923-de4de326dfd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80"];

flowers.forEach(function(item, picture) {
$(".images").append("<img src=" + flowers[picture] + ">");
});

$(".button").click(function() {
      var name = $(".inputName").val();
      flowers.push(name);
      $('.images').empty();
      $(".inputName").val("");
    
    flowers.forEach(function(item, picture) {
$(".images").append("<img src=" + flowers[picture] + ">");
});

});



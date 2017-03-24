// https://www.wordsapi.com/

var word = "dance";


$.ajax({
      url: "https://wordsapiv1.p.mashape.com/words/last/similarTo", // The URL to the API. You can get this in the API page of the API you intend to consume
      type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
      data: {}, // Additional parameters here
      dataType: 'json',
      success: function(data) {
            console.dir((data.source));
            console.log(data);
      },
      error: function(err) {
            alert(err);
      },
      beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "JVsFpSsea5mshtsH7N5dZQOYQd0yp1dqScujsnjdKNIoipqLfS"); // Enter here your Mashape key
      }


}).done(function(response) {


      console.log(response);


});


/*{
  "word": "bloody",
  "similarTo": [
    "unmitigated",
    "butcherly",
    "crimson",
    "gory",
    "homicidal",
    "internecine",
    "murderous",
    "red",
    "sanguinary",
    "sanguineous",
    "slaughterous",
    "violent",
    "blood-filled",
    "bloodstained",
    "bloodsucking",
    "bloodthirsty",
    "bloody-minded"
  ]
}*/
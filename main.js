$(document).ready(function(){

  var $form = $("form"),
  $search = $(".search"),
  $clear = $(".clear"),
  $random = $(".random"),
  $trending = $(".trending"),
  $giphy = $(".giphy img"),
  $giphyLink = $(".giphy a");

  // launch goTranslate function on search
  $form.on("submit", function(e) {
    e.preventDefault();
    goTranslate();
  });

  // clear input on click
  $clear.on("click", function() {
    $search.val("");
  });

  // goTranslate function retrieves gif and replaces giphy image with it
  function goTranslate() {
    var input = $search.val();
    // Ajax call to giphy API
    $.getJSON("https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=" + input, function(json) {
      data = JSON.parse(JSON.stringify(json));
      imgSrc = data.data.images.original.url;
      $giphy.fadeOut(500);
      setTimeout( function() {
        $giphy.attr("src", imgSrc);
        $giphyLink.attr("href", imgSrc);
        setTimeout( function() {
          $giphy.addClass("gif");
          $giphy.fadeIn(500);
        }, 800);
      }, 800);
    })
  }

  // launch goRandom function on button-random click
  $random.on("click", function(e) {
    e.preventDefault();
    goRandom();
  });

  // goRandom function retrives gif and replaces giphy image with it
  function goRandom() {
    var input = $search.val();
    $.getJSON("https://api.giphy.com/v1/gifs/random?api_key=bb2006d9d3454578be1a99cfad65913d&s=" + input, function(json) {
      data = JSON.parse(JSON.stringify(json));
      imgSrc = data.data.images.original.url;
      $giphy.fadeOut(500);
      setTimeout( function() {
        $giphy.attr("src", imgSrc);
        $giphyLink.attr("href", imgSrc);
        setTimeout( function() {
          $giphy.addClass("gif");
          $giphy.fadeIn(500);
        }, 800);
      }, 800);
    })
  };

  // launch goTrending function on button-trending click
  $trending.on("click", function(e) {
    e.preventDefault();
    goTrending();
  });

  // goTrending function displays 3 trending gifs at div element "threeGifs" above
  function goTrending() {
    var url = "https://api.giphy.com/v1/gifs/trending?api_key=wOkuLOpg0lyr0TN1NMtr0qIAsJpFW7rn&q";

    fetch(url)
      .then(data => data.json())
      .then(res => {
        console.log(res);
        var _outputHTML = "";
        var _threeGifs = document.getElementById("threeGifs");
        if (res.data.length < 3) return;
        for (let i = 0; i < 3; i++) {
          var node = document.createElement("img");
          node.setAttribute("src", res.data[i].images.fixed_width.url);
          _threeGifs.appendChild(node);
        }
      })
  };

  (function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    window.giphyStickerPackId = 2815;
    js = d.createElement(s);
    js.id = id;
    js.src ='https://scripts.giphy.com/sticker-embed/latest/bundle.js';
    fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'giphy-sticker-pack'));


});

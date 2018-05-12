var quotes = [
    {
        "quote": "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.",
        "author": "Albert Einstein",
        "bg-image": "img/einstein.jpg"
    }
    , {
        "quote": "The artist is nothing without the gift, but the gift is nothing without work.",
        "author": "Emile Zola",
        "bg-image": "img/zola.jpg"
    }
    , {
        "quote": "I find that the harder I work, the more luck I seem to have.",
        "author": "Thomas Jefferson",
        "bg-image": "img/jefferson.jpg"
    }
    , {
        "quote": "Whether you think that you can, or that you can't, you are usually right.",
        "author": "Henry Ford",
        "bg-image": "img/ford.jpg"
    }
    , {
        "quote": "There are no facts, only interpretations.",
        "author": "Friedrich Nietzsche",
        "bg-image": "img/nietzsche.jpg"
    }
    , {
        "quote": "Try to learn something about everything and everything about something.",
        "author": "Thomas Henry Huxley",
        "bg-image": "img/huxley.jpg"
    }
    , {
        "quote": "Never interrupt your enemy when he is making a mistake.",
        "author": "Napoleon Bonaparte",
        "bg-image": "img/einstein.jpg"
    }
  ];


$(document).ready(function() {
   /*$.getJSON("../js/quotes.json")
   .done(function(json) {
        console.log("fdsdfsd");
   })
   .fail(function(xhr, status, error) {
       console.log(error);
   })
   .always(function() {
       console.log("Always");
   });*/
    var $backgroundSlider = $('#background-slider'),
        $rotatorWrapper = $('.rotator-wrapper'),
        $quoteText = $rotatorWrapper.find('.quote-text'),
        $quoteAuthor = $rotatorWrapper.find('.quote-author'),
        $randomBtn = $('#random-quote'),
        $tweetBtn = $('#tweet'),
        quotesArr = [],
        fadeTime = 300,
        prevRandom;

    quotes.forEach(function(quote) {
        var $li = $('<li class="background-slider-item" />');
        $li.css('background-image', "url(" + quote["bg-image"] + ")");
        console.log("\"" + quote["bg-image"] + "\"");
        $li.appendTo($backgroundSlider);
        quotesArr.push({
           bgImg: $li,
            quote: quote
        });
    });
    
    function randomQuote() {
        var random = Math.floor(Math.random() * quotes.length);
        while(random === prevRandom) {
            random = Math.floor(Math.random() * quotes.length);
        }
        $('blockquote').fadeOut(fadeTime,function() {
            $quoteText.text(quotes[random]["quote"]);
            $quoteAuthor.text(quotes[random]["author"]);
            $(this).fadeIn(fadeTime);
        });
        
        quotesArr[random]["bgImg"].addClass('item-under').show().siblings().filter(':visible').fadeOut(fadeTime * 2,function() {
            quotesArr[random]["bgImg"].removeClass('item-under');
        });;
        prevRandom = random;
    }
    
    function init() {
        var random = Math.floor(Math.random() * quotes.length);
        $quoteText.text(quotes[random]["quote"]);
        $quoteAuthor.text(quotes[random]["author"]);
        quotesArr[random]["bgImg"].show().siblings().hide();
        prevRandom = random;
    }
    
    $randomBtn.on('click', randomQuote);

    setInterval(randomQuote, 5000);

    
    
    init();
    
});
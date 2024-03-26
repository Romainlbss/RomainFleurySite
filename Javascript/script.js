document.addEventListener("DOMContentLoaded", function()
{
    function updateDateTime(){
        var now = new Date();
        var date = now.toLocaleDateString("fr-FR");
        var time = now.toLocaleTimeString("fr-FR");
        document.getElementById("dateTime").innerText = date + " " + time;
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();


    var images = [
        "/Images/Anna.jpg",
        "/Images/White.jpg",
        "/Images/harry_potter_lego.jpg",
        "/Images/minifigure-lego-dc-comics-le-joker.jpg",
        "/Images/minifigure-lego-disney-100-ans-robin-des-bois.jpg",
        "/Images/minifigure-lego-disney-peter-pan.jpg",
        "/Images/minifigure-lego-harry-potter-ron-weasley.jpg",
        "/Images/minifigure-lego-marvel-hulk.jpg",
        "/Images/minifigure-lego-marvel-spider-man-miles-morales.jpg",
        "/Images/minifigure-lego-ninjago-sensei-wu-legacy.jpg",
        "/Images/minifigure-lego-simpson-serie-2-bart.jpg",
        "/Images/minifigure-lego-star-wars-luke-skywalker-cloud-city.jpg",
        "/Images/minifigurine_lego_lisa.jpg",
        "/Images/TomJedusor.jpg",
        "/Images/TonyStark.jpg"
      ];
      
      var currentImageIndex = 0;
      var imageElement = document.getElementById('imageCaroussel');
      var interval;
      function nextImage() 
      {
        imageElement.src = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length;
      }

      function startCarousel() {
        interval = setInterval(nextImage, 1000);
      }

      function stopCarousel() {
        clearInterval(interval);
      }
      
      imageElement.addEventListener('click', function() {
        if (interval) 
        {
          stopCarousel();
          interval = null;
        } 
        else 
        {
          startCarousel();
        }
      });
      
      startCarousel();

      var fiches = [
        "http://127.0.0.1:5500/Content//Collection/fig001.xhtml",
        "http://127.0.0.1:5500/Content//Collection/fig002.xhtml",
        "http://127.0.0.1:5500/Content//Collection/fig003.xhtml",
        "http://127.0.0.1:5500/Content//Collection/fig004.xhtml",
        "http://127.0.0.1:5500/Content//Collection/fig005.xhtml",
        "http://127.0.0.1:5500/Content//Collection/fig006.xhtml",
        "http://127.0.0.1:5500/Content//Collection/fig007.xhtml",
        "http://127.0.0.1:5500/Content//Collection/fig008.xhtml",
        "http://127.0.0.1:5500/Content//Collection/fig009.xhtml",
        "http://127.0.0.1:5500/Content//Collection/fig010.xhtml",
        "http://127.0.0.1:5500/Content//Collection/fig011.xhtml",
        "http://127.0.0.1:5500/Content//Collection/fig012.xhtml",
        "http://127.0.0.1:5500/Content//Collection/fig013.xhtml",
        "http://127.0.0.1:5500/Content//Collection/fig014.xhtml",
        "http://127.0.0.1:5500/Content//Collection/fig015.xhtml"
      ] 

      var buttonElement = document.getElementById('aléathouarsButton');

      function aleatoirFiche()
      {
        var randomNumber = Math.floor(Math.random() * 16);
        buttonElement.href = fiches[randomNumber];
      }
      aleatoirFiche();
      setInterval(aleatoirFiche, 10);

      function ChangeCss (){
        var styleAccueil = document.getElementById('StyleSheet');
        var styleFig001 = document.getElementById('StyleFig001');
        var styleFig002 = document.getElementById('StyleFig002');
        var styleFig003 = document.getElementById('StyleFig003');
        var styleFig004 = document.getElementById('StyleFig004');
        var styleFig005 = document.getElementById('StyleFig005');
        var styleFig006 = document.getElementById('StyleFig006');
        var styleFig007 = document.getElementById('StyleFig007');
        var styleFig008 = document.getElementById('StyleFig008');
        var styleFig009 = document.getElementById('StyleFig009');
        var styleFig010 = document.getElementById('StyleFig010');
        var styleFig011 = document.getElementById('StyleFig011');
        var styleFig012 = document.getElementById('StyleFig012');
        var styleFig013 = document.getElementById('StyleFig013');
        var styleFig014 = document.getElementById('StyleFig014');
        var styleFig015 = document.getElementById('StyleFig015');
        if (styleAccueil.href == "http://127.0.0.1:5500/Styles/stylesheet.css") {
          styleAccueil.href = "/Styles/stylesheet_visually_impaired.css";
          styleFig001.href = "/Styles/stylesheet_visually_impaired.css";
          styleFig002.href = "/Styles/stylesheet_visually_impaired.css";
          styleFig003.href = "/Styles/stylesheet_visually_impaired.css";
          styleFig004.href = "/Styles/stylesheet_visually_impaired.css";
          styleFig005.href = "/Styles/stylesheet_visually_impaired.css";
          styleFig006.href = "/Styles/stylesheet_visually_impaired.css";
          styleFig007.href = "/Styles/stylesheet_visually_impaired.css";
          styleFig008.href = "/Styles/stylesheet_visually_impaired.css";
          styleFig009.href = "/Styles/stylesheet_visually_impaired.css";
          styleFig010.href = "/Styles/stylesheet_visually_impaired.css";
          styleFig011.href = "/Styles/stylesheet_visually_impaired.css";
          styleFig012.href = "/Styles/stylesheet_visually_impaired.css";
          styleFig013.href = "/Styles/stylesheet_visually_impaired.css";
          styleFig014.href = "/Styles/stylesheet_visually_impaired.css";
          styleFig015.href = "/Styles/stylesheet_visually_impaired.css";
        } else {
          styleAccueil.href = "/Styles/stylesheet.css";
          styleFig001.href = "/Styles/stylesheet.css";
          styleFig001.href = "/Styles/stylesheet.css";
          styleFig002.href = "/Styles/stylesheet.css";
          styleFig003.href = "/Styles/stylesheet.css";
          styleFig004.href = "/Styles/stylesheet.css";
          styleFig005.href = "/Styles/stylesheet.css";
          styleFig006.href = "/Styles/stylesheet.css";
          styleFig008.href = "/Styles/stylesheet.css";
          styleFig009.href = "/Styles/stylesheet.css";
          styleFig010.href = "/Styles/stylesheet.css";
          styleFig011.href = "/Styles/stylesheet.css";
          styleFig012.href = "/Styles/stylesheet.css";
          styleFig013.href = "/Styles/stylesheet.css";
          styleFig014.href = "/Styles/stylesheet.css";
          styleFig015.href = "/Styles/stylesheet.css";
        }
      }
      
      document.getElementById('ChangeStyle').addEventListener('click', ChangeCss);
      
})


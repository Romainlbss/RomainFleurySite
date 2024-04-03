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
      "../Fleury_Fournet/Images/Anna.jpg",
      "../Fleury_Fournet/Images/White.jpg",
      "../Fleury_Fournet/Images/harry_potter_lego.jpg",
      "../Fleury_Fournet/Images/minifigure-lego-dc-comics-le-joker.jpg",
      "../Fleury_Fournet/Images/minifigure-lego-disney-100-ans-robin-des-bois.jpg",
      "../Fleury_Fournet/Images/minifigure-lego-disney-peter-pan.jpg",
      "../Fleury_Fournet/Images/minifigure-lego-harry-potter-ron-weasley.jpg",
      "../Fleury_Fournet/Images/minifigure-lego-marvel-hulk.jpg",
      "../Fleury_Fournet/Images/minifigure-lego-marvel-spider-man-miles-morales.jpg",
      "../Fleury_Fournet/Images/minifigure-lego-ninjago-sensei-wu-legacy.jpg",
      "../Fleury_Fournet/Images/minifigure-lego-simpson-serie-2-bart.jpg",
      "../Fleury_Fournet/Images/minifigure-lego-star-wars-luke-skywalker-cloud-city.jpg",
      "../Fleury_Fournet/Images/minifigurine_lego_lisa.jpg",
      "../Fleury_Fournet/Images/TomJedusor.jpg",
      "../Fleury_Fournet/Images/TonyStark.jpg"
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
        interval = setInterval(nextImage, 10);
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
        "/Users/romainfournet/WebDev/Fleury_Fournet/Content/Collection/fig001.xhtml",
        "/Users/romainfournet/WebDev/Fleury_Fournet/Content/Collection/fig002.xhtml",
        "/Users/romainfournet/WebDev/../Fleury_Fournet/Content/Collection/fig003.xhtml",
        "/Users/romainfournet/WebDev/Fleury_Fournet/Content/Collection/fig004.xhtml",
        "/Users/romainfournet/WebDev/Fleury_Fournet/Content/Collection/fig005.xhtml",
        "/Users/romainfournet/WebDev/Fleury_Fournet/Content/Collection/fig006.xhtml",
        "/Users/romainfournet/WebDev/Fleury_Fournet/Content/Collection/fig007.xhtml",
        "/Users/romainfournet/WebDev/Fleury_Fournet/Content/Collection/fig008.xhtml",
        "/Users/romainfournet/WebDev/Fleury_Fournet/Content/Collection/fig009.xhtml",
        "/Users/romainfournet/WebDev/Fleury_Fournet/Content/Collection/fig010.xhtml",
        "/Users/romainfournet/WebDev/Fleury_Fournet/Content/Collection/fig011.xhtml",
        "/Users/romainfournet/WebDev/Fleury_Fournet/Content/Collection/fig012.xhtml",
        "/Users/romainfournet/WebDev/Fleury_Fournet/Content/Collection/fig013.xhtml",
        "/Users/romainfournet/WebDev/Fleury_Fournet/Content/Collection/fig014.xhtml",
        "/Users/romainfournet/WebDev/Fleury_Fournet/Content/Collection/fig015.xhtml"
      ] 

      var buttonElement = document.getElementById('aléathouarsButton');

      function aleatoirFiche()
      {
        var randomNumber = Math.floor(Math.random() * 16);
        buttonElement.href = fiches[randomNumber];
      }
      aleatoirFiche();
      setInterval(aleatoirFiche, 10);

      const baseStyle = document.getElementById('StyleSheet');
      const impairedStyle = document.getElementById('StyleSheetImpaired');
      let isBaseStyle = false;
      function ChangeCss (){
        isBaseStyle = !isBaseStyle;
        if (isBaseStyle)
        {
          baseStyle.disabled = true;
          impairedStyle.disabled = false;
        }
        else
        {
          baseStyle.disabled = false;
          impairedStyle.disabled = true;
        }
      }
      
      document.getElementById('ChangeStyle').addEventListener('click', ChangeCss);
      
})


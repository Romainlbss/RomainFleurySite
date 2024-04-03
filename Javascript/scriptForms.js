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

    function submitForm(){
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const feedback = document.getElementById("feedback").value;
        const rating = document.getElementById("rating").value;
        localStorage.setItem("name", name);
        localStorage.setItem("age", age);
        localStorage.setItem("feedback", feedback);
        localStorage.setItem("rating", rating);

        window.location.href = 'Avis2.xhtml';
    }

    document.getElementById("submit").addEventListener("click", submitForm)
    
})
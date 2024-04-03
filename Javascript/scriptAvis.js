document.addEventListener("DOMContentLoaded", function()
{
    document.getElementById("name").innerText = localStorage.getItem("name");
    document.getElementById("age").innerText = localStorage.getItem("age") + " ans";
    document.getElementById("feedback").innerText = localStorage.getItem("feedback");
    document.getElementById("rating").innerText = localStorage.getItem("rating");

    function updateDateTime(){
        var now = new Date();
        var date = now.toLocaleDateString("fr-FR");
        var time = now.toLocaleTimeString("fr-FR");
        document.getElementById("dateTime").innerText = date + " " + time;
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();
})
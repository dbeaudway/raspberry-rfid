console.log('index.js loaded')

function getScans(){
    fetch('/scan')
        .then(response => response.json())
        .then(data => data.map(item => $("body").append(`<li>${JSON.stringify(item)}</li>`)));
}

function addScan(){
    let id = Math.floor(Math.random() * (999999 - 1));
    let timestamp = new Date().toLocaleTimeString();
    let data = {"id": id, "timestamp": timestamp};
    
    $.ajax({
        type: "POST",
        url: '/scan',
        data: data
    })
}
function count() {
    let getMessage = document.getElementById('message').value; //Get value for send to system

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        //url = new URL(url);
        //var domain = "https://"+url.hostname;
        document.getElementById('url-web').innerHTML = url;
        var path = 'http://localhost:3000/scrapping';
    
        let response = fetch(path, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({url: url, question: document.getElementById('message').value})
        });

        response.then(x=>{
            document.getElementById('response-cabot').innerHTML = "You're about search :" + url; 
        });
    });
}
document.getElementById('button-send').onclick = count;

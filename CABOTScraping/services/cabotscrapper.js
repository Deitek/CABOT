const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request');
const fetch = require("node-fetch");


var scrapePage = function(url, question) {

    //window.location.hostname;//window.location.href;//window.location.hostname;
    const pageURL = url;

    //make an HTTP request for the page to be scraped
    request(pageURL, function(error, response, responseHtml){
        if (!error){
            //write the entire scraped page to the local file system
            let path = './HTML/entire-page.html';
            fs.writeFile(path, responseHtml, function(err){
                console.log(err);
                if(err === null){
                    let $ = cheerio.load(responseHtml);
                    //console.log($);
    
                    $('*').get().map(el => {
                        if(el.name == "p"){
                            //write the content to the local file system
                            $p = $('p').html();
                        }
                    });

                    var t = $('html *').contents().map(function () {
                        var parrafo = (this.name === 'p') ? $(this).text() : '';
                        parrafo.replace(/(<([^>]+)>)/ig, '');
                        return parrafo
                    }).get().join(' ');
                    //write the Text to the local file system
                    fs.writeFile('./HTML/data-clear.txt', t, function (err) {
                        if(err===null){
                            var json = {
                                "utterances":[
                                    {
                                        "link":"101",
                                        "searchSentence":question,
                                        "inputDoc":t,
                                        "prob": null
                                    }
                                ]
                            }

                            let response = fetch("http://127.0.0.1:5000/textsimilarity/v1", {
                                method: 'POST',
                                headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({data: json})
                            });

                            response.then((x)=> console.log(x)) 
                        }
                    });

                }
            })

            //write isolated sections of the entire scraped page to the local file system

            //create the cheerio object
            /*const $ = cheerio.load(responseHtml),
                //create a reference to the header element
                $header = $('header').html(),
                $content = $('#mainContent').html(),
                $footer = $('footer').html();

                

            //write the header to the local file system
            fs.writeFile(__dirname + '/HTML/header.html', $header, function(err){
                console.log('header.html successfully written to HTML folder');
            });

            //write the footer to the local file system
            fs.writeFile(__dirname + '/HTML/footer.html', $footer, function(err){
                console.log('footer.html successfully written to HTML folder');
            });*/
        }
        else if (error) {
            //Return Error
            if (error) return console.error(error);
        }
    });
}


module.exports = { 
    scrapePage
} 
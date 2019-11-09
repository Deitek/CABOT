const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request');
const fetch = require("node-fetch");


var scrapePage = function(url) {

    //window.location.hostname;//window.location.href;//window.location.hostname;
    const pageURL = url

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
                        return (this.name === 'p') ? $(this).html() : '';
                    }).get().join(' ');
                    console.log(t);
                    //write the Text to the local file system
                    fs.writeFile('./HTML/data-clear.txt', t, function (err) {
                        console.log(err);
                    });

                }
            })

            //write isolated sections of the entire scraped page to the local file system

            //create the cheerio object
            const $ = cheerio.load(responseHtml),
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
            });
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
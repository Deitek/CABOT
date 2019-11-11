const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request');
const fetch = require("node-fetch");
const { SimilarSearch } = require('node-nlp');
const similar = new SimilarSearch();


var scrapePage = function(url, question) {

    const pageURL = url;

    //make an HTTP request for the page to be scraped
    var response = request(pageURL, function(error, response, responseHtml){
        var result = null;
        if (!error){
            //write the entire scraped page to the local file system
            let path = './HTML/entire-page.html';
            fs.writeFile(path, responseHtml, function(err){
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
                                        "link": url,
                                        "searchSentence":question,
                                        "inputDoc":t,
                                        "prob": null
                                    }
                                ]
                            }

                            console.log(t.substring(0,1000), "...", t.length);
                            result = similar.getBestSubstring(t, question);
                            console.log(result);
                        }
                    });
                }

                return result;
            })
        }
        else if (error) {
            //Return Error
            if (error) return console.error(error);
        }
    });

    return response;
}


module.exports = { 
    scrapePage
} 
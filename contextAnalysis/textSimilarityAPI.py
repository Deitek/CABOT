import content as content
from flask import Flask
from flask import jsonify
from flask import request
import en_core_web_md
import spacy

# Load English tokenizer, tagger, parser, NER and word vectors
#nlp = spacy.load('en_core_web_md')
from SpacyTextSimilarity import text

nlp = en_core_web_md.load()

app = Flask(__name__)

class Utterance():

  link = ''
  searchText = ''
  inputText = ''

  @property
  def serialize(self):
     return {
        'link': self.title,
        'searchText': self.searchText,
        'inputText': self.inputText,
     }

#we will save the changes and execute this script again.

@app.route('/textsimilarity/v1',methods=['POST'])
def textsimilarity():
    if request.method == 'POST':
        content = request.get_json()

#        for utterance in utterances:
#output = request.get_json()
#for utterances in

        link = content['link']
        print('link')
        print(link)
        searchSentence = content['searchText']
        print('searchSentece')
        print(searchSentence)
        inputDoc = content['inputText']
        print('inputDoc')
        print(inputDoc)
        prob = content['prob']
        return searchSimilarity(link, inputDoc, searchSentence)

def searchSimilarity(link, inputDoc, searchSentence):
    nlpInputDoc = nlp(inputDoc)
    nlpSearchSentence = nlp(searchSentence)
    search_doc_no_stop_words = nlp(' '.join([str(t) for t in nlpInputDoc if not t.is_stop]))
    main_doc_no_stop_words = nlp(' '.join([str(t) for t in nlpSearchSentence if not t.is_stop]))
    print(main_doc_no_stop_words.similarity(search_doc_no_stop_words))
    return jsonify({'response': main_doc_no_stop_words.similarity(search_doc_no_stop_words)})

cleanScrappedDoc=[
    {
        "utterances": [
            {
                "link": "101",
                "searchSentence": "guias",
                "inputDoc": "pode trabajo    memoriaacademica    eafitplus    cajadeherramientastecnologicas    guiasinstruccionales    repositorios    francisco-jose-de-caldas-y-tenorio    admisiones de posgrados    Agencia de noticias    Albatros Create    Alemán     Año",
                "prob": "null"
            },
            {
                "link": "102",
                "searchSentence": "plus",
                "inputDoc": "ademica    eafitplus    cajadeherramientastecnologicas    guiasinstruccionales",
                "prob": "null"
            }
        ]
    }
 ]

if __name__ == '__main__':
 app.run()
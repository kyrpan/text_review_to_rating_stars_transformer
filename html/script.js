function getText(){
  var text = document.getElementById('text').value;
}

String.prototype.removeStopWords = function() {
    var cleansed_string = this.valueOf();
    var stop_words = new Array("all","being","over","through","yourselves","its","before","with","ll","had","should","to","only","under","ours","has","should've","do","them","his","you've","they","during","now","him","nor","d","did","these","t","each","where","because","you'd","doing","theirs","some","are","further","ourselves","out","what","for","while","re","does","above","between","mustn","she","be","we","after","mightn't","here","shouldn","hadn't","by","on","about","couldn","of","o","s","isn","or","own","into","yourself","down","hers","mightn","your","you're","from","her","whom","it's","there","been","few","too","themselves","was","until","himself","both","but","that'll","herself","than","those","he","me","myself","ma","this","up","will","below","ain","can","were","my","and","ve","then","is","in","am","it","an","as","itself","at","have","our","their","if","again","no","that","when","same","any","how","other","which","you","shan't","shan","who","such","why","a","off","i","m","having","you'll","so","y","she's","the","yours","once")

    // Split out all the individual words in the phrase
    words = cleansed_string.match(/[^\s]+|\s+[^\s+]$/g)

    final_words = [];

    // Review all the words
    for(var x=0; x < words.length; x++) {
        // For each word, check if stop words
        // Get the current word
        var word = words[x].replace(/\s+|[^a-zA-Z]+/ig, "");   // Trim the word and remove non-alpha 
        word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");  // remove puncuation
        word = word.replace(/\s{2,}/g," "); // remove double spaces

        isStopword = false;
        for(var y=0; y < stop_words.length; y++) {
            // Get the stop word
            if(word.toLowerCase() == stop_words[y]) {
                isStopword = true;
                break;
            }
        }
        if (!isStopword) final_words.push(word);
    }

    return final_words;
}

function getClearText(){
var text = document.getElementById('text').value;
words = text.removeStopWords();


 listOfWords = [];
 for (var i =0; i < words.length && i < 100; i++) {
    var num = mapObj[words[i].toLowerCase()];
    if (num != undefined) {
        listOfWords.push(num);
    }
 }
 var result = []
 if (listOfWords.length < 100) {
    for (var i =0; i < 100 - listOfWords.length; i++) {
        result.push(0.0);
    }
    for (var i =0; i < listOfWords.length; i++) {
        result.push(listOfWords[i]);
    }
 }
 return result;
}

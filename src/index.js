const { log } = require('console');
const fs = require('fs'); // FileSystem, zum lesen des dateisystem 
const path = require('path'); // Path, zum arbeiten mit dateipfaden 

//Benutzernamen Generator
//example username : HotSchkolde, King_Leipzig 

//what we need?
// -Eine Function um die Werte aus de JSON Datei zu lesen

/**
 * @function getWords
 * @description Reads word from json file.
 * @returns  { object }
 */
function getWords()
{
    //wir lesen eine json 
    const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf-8'));

    // wir geben dir worte zurück
    return json;
};

// - Eine function um dir zufällige Nummer hinter dem Namen zu generieren

/**
 * @description Creates a random number accordeing to a minimal and maximal value
 * @param { number } minNumber 
 * @param { number } maxNumber 
 * @returns { number }
 */
function createRandomNumber(minNumber, maxNumber)
{
    //Wir erschafen eine zufallzahl Number hinter dem namen generieren
    const num = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);

    // wir geben die zufällige numer zurück
    console.log(num);
}

// - Eine function mit der grose buchstabel
/**
 * @function capitalizeString
 * @description Take....
 * @param {string} word 
 * @returns  { string }
 */
function capitalizeString(word)
{
    //Prüfe ob kein wort vorhanden ist
    if(word === undefined || word.lenght === 0 || !isNaN(word))
    {
        return "Default";
    }

    //Wir nehmen den ersten buchstaben  von unserem String , und ndern ihn auf UpperCase
    const wordStart = word.charAt(0).toUpperCase();

    //Wir nehmen den rest des string und ändern ihn auf LowerCase
    const wordRest  = word.substring(1).toLowerCase();

    //Wir geben den fertigen String zurück
    return wordStart + wordRest ;
}


// - eine function mit der wir den benutzernamen generieren und auf die ergebnisse der anderen functioniren zugreifen

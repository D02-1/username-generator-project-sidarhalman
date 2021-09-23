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
    const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf-8'));

    return json;
};

// - Eine function um dir zufällige Nummer hinter dem Namen zu generieren
// - Eine function mit der grose buchstabel
// - eine function mit der wir den benutzernamen generieren und auf die ergebnisse der anderen functioniren zugreifen
const fs = require("fs")

// path do pliku:
const myFile = "message.txt"
const message1 = `Wiadomość zapisana w pliku ${myFile}`

fs.writeFile(myFile, message1, (err) => {
    if (err) throw err;
    console.log("Zapisano!");
});

const message2 = "\ndodaję kolejną linijkę"

fs.writeFile(myFile, message2, { 
    encoding: "utf8", 
    flag: "a+", }, 
    (err) => {
    if (err) throw err;
    console.log("Ponownie zapisano!");
    });



console.log(fs.readFile(myFile, "utf8", (err,data) => {
    if (err) throw err;
    console.log("Odczyt z pliku ", myFile)
    console.log(data)}));

    /* zmiany asynchroniczne - nie zawsze podczas odczytu widać zapis całej zawartości pliku */
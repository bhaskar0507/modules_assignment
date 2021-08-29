const readline = require("readline")

const readline1 = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

var library = ["alchemist", "ignite minds", "death"];

function notify() {
    console.log('Select option 1,2 or 3')
    console.log('1: To see library')
    console.log('2: To add new book to library')
    console.log('3: To exit!')

};


check();
function check() {
    readline1.question("Enter number:", function (num) {
        if (num == 1) {
            console.log(library);
            notify();
            check();
        }
        else if (num == 2) {
            readline1.question("Add book to library:", function (name) {
                library.push(name);
                notify();
                check();
            });
        } else if (num == 3) {
            readline1.close();
            console.log('bye bye!')

        } else {
            console.log("Enter valid number eg. 1,2 or 3");
            notify();
            check();
        }
    });

    readline1.on("close", function () {
        return;
     
    });
}

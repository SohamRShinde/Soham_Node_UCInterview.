const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateNickname(firstName) {
    const surnames = ["Geller", "Tribbiani", "Buffay", "Green", "Bing", "Wheeler", "Hannigan"];
    const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
    const slicedName = firstName.slice(0, 4);
    console.log(`Your Friends Universe nickname is: ${slicedName} ${randomSurname}`);
}

rl.question("Enter your first name: ", function(name) {
  generateNickname(name);
  rl.close();
});
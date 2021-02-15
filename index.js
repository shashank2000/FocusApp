const prompt = require('electron-prompt');
const fs = require('fs');
const writeConfig = { 
    encoding: "utf8", 
    flag: "a+", 
    mode: 0o666 
  }

let intervalFunc = () => prompt({
    title: 'Prompt example',
    label: 'Are you working on a top-3 important thing this instant?',
    value: 'No',
    inputAttrs: {
        type: 'text'
    },
    type: 'input',
    alwaysOnTop: true,
    width: 450
})
.then((r) => {
    if(r === null) {
        console.log('user cancelled');
    } else {
        console.log('result', r);
        r = 0;
        if (r == "yes" || r == "Yes"){
            r = 1
        }
        var timeInMs = Date.now();
        var OutStr = `${timeInMs}, ${r}\n`;
        fs.writeFileSync('myfile.txt', OutStr, writeConfig);
    }
})
.catch(console.error);

setInterval(intervalFunc, 3600000);
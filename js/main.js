

axios.get('https://pokeapi.co/api/v2/pokemon/')
.then((response) => {
    let charmander = response.data.results[3].url
    let charmelon = response.data.results[4].url
    let charizard = response.data.results[5].url

axios.get(charmander)
.then ((response) => {
    let imageURLchar = response.data.sprites.other.dream_world.front_default
    let image_element = document.createElement('img')
    image_element.src = (imageURLchar)
    document.body.appendChild(image_element)

});
 });

const output = document.getElementById("output");
  
const editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    mode: {
        name: "python",
        version: 3,
        singleLineStringErrors: false
    },
    lineNumbers: true,
    indentUnit: 4,
    matchBrackets: true
});
  
editor.setValue(`sum([1, 2, 3, 4, 5])`);
output.value = "Initializing...\n";
  
async function main() {
    let pyodide = await loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/" });
    // Pyodide ready
    output.value += "Ready!\n";
    return pyodide;
};
  
let pyodideReadyPromise = main();
  
function addToOutput(s) {
    output.value += ">>>" + s + "\n";
}
  
async function evaluatePython() {
    let pyodide = await pyodideReadyPromise;
    try {
        console.log(editor.getValue())
        let output = pyodide.runPython(editor.getValue());
        addToOutput(output);
    } catch (err) {
        addToOutput(err);
    }
}
const DICIONARY_PATH = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function _onSubmit(event){
    const defContainer = document.querySelector('#definitionContainer');
    defContainer.innerHTML = '';
    event.preventDefault();
    const textInput = document.querySelector('#textInput');
    const query = encodeURIComponent(textInput.value);
    console.log(DICIONARY_PATH + query);
    fetch(DICIONARY_PATH + query).then(_onResponse).then(_onJsonReady);
}

function _onJsonReady(json){
    const defContainer = document.querySelector('#definitionContainer')
    const word = json[0].meanings;
    const n = word.length;
    let acc = 1;
    for(let i = 0; i < n; i++){
        const m = word[i].definitions.length;
        for(let j = 0; j < m; j++){
            const content = document.createElement('p');
            const text = document.createTextNode(`Definition ${acc}: ${word[i].definitions[j].definition}`);
            content.appendChild(text);
            defContainer.appendChild(content);
            acc++;
        }
    }
}

function _onResponse(response){
    return response.json();
}

const form = document.querySelector('form');
form.addEventListener('submit', this._onSubmit);

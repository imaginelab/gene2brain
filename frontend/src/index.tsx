import {render} from "preact"
import { useSignal, useComputed, useSignalEffect } from '@preact/signals'


function App({}) {
    const geneNames = useSignal([]);
    const inputText = useSignal("");
    const selected = useComputed(() => geneNames.value.includes(inputText.value.toUpperCase()) && inputText.value);


    useSignalEffect(() => console.log(selected.value))

    const setInputText = (e) => inputText.value = e.target.value;

    useSignalEffect(() => {
        if(inputText.value && !geneNames.peek().find(g => g.startsWith(inputText.value))) {
            fetch(`genes?query=${inputText.value}`)
                .then(res => (console.log(res), res).json())
                .then(genes => geneNames.value = (console.log(genes), geneNames).peek().concat(genes))
        }
    })


    return (<div>
        <input list="genes" value={inputText} oninput={setInputText} />
        <datalist id="genes">
        {geneNames.value.map(name => (
            <option value={name}></option>
        ))}
            </datalist>
        {
            selected.value && (
                <div>
                    <img  style="width: 100vw;" src={`images/${selected}.png`} />
                    <a href={`csv/${selected}.csv`}>data</a>
                    </div>
            )
        }
    </div>)
}

render(<App />, document.body)

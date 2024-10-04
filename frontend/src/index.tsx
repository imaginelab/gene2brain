import { render } from "preact";
import { useSignal, useComputed, useSignalEffect } from '@preact/signals';

// Import Google Fonts using an @import style tag in your JavaScript
const fontStyle = document.createElement("style");
fontStyle.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
`;
document.head.appendChild(fontStyle);

function App() {
  const geneNames = useSignal([]);
  const inputText = useSignal("");
  const selected = useComputed(() => geneNames.value.includes(inputText.value.toUpperCase()) && inputText.value);

  useSignalEffect(() => console.log(selected.value));

  const setInputText = (e) => inputText.value = e.target.value;

  useSignalEffect(() => {
    if (inputText.value && !geneNames.peek().find(g => g.startsWith(inputText.value))) {
      fetch(`gene2brain?query=${inputText.value}`)
        .then(res => (console.log(res), res).json())
        .then(gene2brain => geneNames.value = (console.log(gene2brain), geneNames).peek().concat(gene2brain));
    }
  });

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Gene2Brain</h1>
      <input
        list="gene2brain"
        value={inputText}
        oninput={setInputText}
        style={styles.searchBar}
        placeholder="Search for genes..."
      />
      <datalist id="gene2brain">
        {geneNames.value.map(name => (
          <option value={name}></option>
        ))}
      </datalist>

      {selected.value && (
        <div>
          <img style={styles.image} src={`images/${selected}.jpg`} />
          <a href={`csv/${selected}.csv`}>Download data</a>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'black',
    color: 'white',
    fontFamily: "'Lato', sans-serif",
  },
  title: {
    fontSize: '4rem',
    marginBottom: '20px',
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',  // Adjust font weight if needed
  },
  searchBar: {
    padding: '10px',
    fontSize: '1.2rem',
    width: '300px',
    textAlign: 'center',
    borderRadius: '5px',
    border: '2px solid white',
    backgroundColor: 'transparent',
    color: 'white',
    outline: 'none',
    fontFamily: "'Lato', sans-serif",
  },
  image: {
    width: '100vw',
  },
};

render(<App />, document.body);

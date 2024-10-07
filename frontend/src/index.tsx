import { render } from "preact";
import { useSignal, useComputed, useSignalEffect } from '@preact/signals';

// Import Google Fonts using an @import style tag in your JavaScript
const globalStyle = document.createElement("style");
globalStyle.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
  
  /* Ensure the entire page, including the body and html, is styled */
  html, body {
    margin: 0;
    padding: 0;
    background-color: black;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
`;
document.head.appendChild(globalStyle);

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
          <a href={`csv/${selected}.csv`} style={styles.link}>Download data</a>
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
  link: {
    color: 'white',       // Make the text white for better contrast
    padding: '10px',      // Add some padding
    textDecoration: 'underline',  // Optionally underline the link
    fontSize: '1.2rem',   // Increase the font size to make it more visible
    fontWeight: 'bold',   // Make the link bold
    cursor: 'pointer',    // Change the cursor to a pointer when hovered
  },
  image: {
    width: '100vw',
    marginTop: '20px', // Add margin on top to create a gap
    textAlign: 'center',


  },
};

render(<App />, document.body);

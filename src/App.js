import './App.css';
import markdown from './assets/checklist.example.md';
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw';
import usePaginatedMarkdown from './hooks/usePaginatedMarkdown';

function App() {
  const [ markdownData, next, previous ] = usePaginatedMarkdown(markdown)

  return (
    <div className="App">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {markdownData}
      </ReactMarkdown>
      {
        previous && <button onClick={previous}>Précédent</button>
      }
      {
        next && <button onClick={next}>Suivant</button>
      }
    </div>
  );
}

export default App;

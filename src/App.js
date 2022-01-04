import './App.css';
import markdown from './assets/checklist.example.md';
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw';
import useSplitedMarkdown from './hooks/useSplitedMarkdown';

import { ItemCardContainer, ItemCard } from './components/ItemCard'

function App() {
  const [ items, checkItem, unCheckItem ] = useSplitedMarkdown(markdown);

  return (
    <div className="App">
      <ItemCardContainer items={items}>
      {
        items && items.map((item, index) => (
          <ItemCard key={index} checked={item.checked} checkItem={() => checkItem(index)} unCheckItem={() => unCheckItem(index)}>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {item.md}
            </ReactMarkdown>
          </ItemCard>
        ))
      }
      </ItemCardContainer>
    </div>
  );
}

export default App;

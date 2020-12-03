import React from 'react';
import NewsList from './news/NewsList'

function App() {

  const [news, setNews] = React.useState(
    [
      {id: 1, count: 100, title: 'title1', visible: false, read: false },
      {id: 2, count: 100, title: 'title2', visible: true, read: false},
      {id: 3, count: 100, title: 'title3', visible: false, read: false},
      {id: 4, count: 100, title: 'title4', visible: true, read: false},
    ]);

  

  let readChange = (id) => {
    setNews(news.map(item => {
        if(item.id === id) {
          item.read = !item.read
        }
        return item;
      }));
  }

  return (
    <div className="container">
       <h2>
         lessonn react
       </h2>
       <NewsList news={news} changeRead={readChange}/>
    </div>
  );
}

export default App;

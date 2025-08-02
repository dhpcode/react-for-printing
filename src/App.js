import './App.css';
import { useState } from 'react';
import Title from './components/Title';

function App() {


  const [events, setEvents] = useState([
    { title: "akhror's birthday party", id: 1 },
    { title: "doniyor's live stream", id: 2 },
    { title: "match: manchester united vs barcelona", id: 3 },
    { title: 'AFC annual ceremony', id: 4 }
  ])

  const [showContent, setShowContent] = useState(true);


  const handleDelete = (id) => {
    // const filteredEvents = events.filter((event) => {
    //   return event.id !== id;
    // })
    // setEvents(filteredEvents)

    // setEvents(events.filter(event => event.id !== id))

    setEvents(prev => prev.filter(event => event.id !== id));
  }

  return (
    <div className="App">
      <Title />

      {/* buttonlar */}
      {showContent && <button onClick={() => setShowContent(false)}>Hide content</button>}
      {!showContent && <button onClick={() => setShowContent(true)}>Show content</button>}


      {/* kontent qism */}
      {showContent &&
        <div>
          {/* kontent yo'q bo'lsa chiqadigan xabar */}
          {events.length === 0 ? <h2>No content available 😔</h2> : null}

          {events.map((event) => {
            return (
              <div key={event.id}>
                <h2>{event.title}</h2>
                <button onClick={() => handleDelete(event.id)}>Delete</button>
              </div>
            )
          })}

        </div>
      }

    </div>
  );
}

export default App;

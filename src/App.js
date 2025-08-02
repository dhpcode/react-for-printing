import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import { Fragment } from 'react';
import Modal from './components/Modal';

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

      <Title title="Akhror's Kingdom 👑 Events" subtitle="All events will be places here" />
      <br></br>

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
              <Fragment key={event.id}>
                <h2>{event.title}</h2>
                <button onClick={() => handleDelete(event.id)}>Delete</button>
              </Fragment>
            )
          })}

        </div>
      }
      <Modal>
        <h2>Akhror Soliyev's youtube channel 💖</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facere minima aliquid placeat officia distinctio nemo laudantium mollitia quisquam, aspernatur nesciunt tempore eos ducimus provident eveniet totam tempora sapiente laborum doloremque cumque voluptatibus exercitationem sit ad?
        </p>
        <a href="#">Subscribe</a>
      </Modal>
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {


  const [events, setEvents] = useState([])


  const newEvent = (event) => {
    setEvents((prev) => {
      return [...prev, event]
    });
    setShowModal(false);
  }

  const [showContent, setShowContent] = useState(true);

  const [showModal, setShowModal] = useState(false);


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
      {showContent && <EventList events={events} handleDelete={handleDelete} />}
      <br />
      {/* Modal component */}
      {showModal && <Modal>
        <NewEventForm newEvent={newEvent} />
      </Modal>}
      <br />
      <button onClick={() => { setShowModal(true) }}>New Event</button>
    </div>
  );
}

export default App;

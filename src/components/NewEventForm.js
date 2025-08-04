import { useState } from 'react'
import './NewEventForm.css'

import { v4 as uuidv4 } from 'uuid';
uuidv4();

function NewEventForm({ newEvent }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('Fargona');

  const resetInputs = () => {
    setTitle('');
    setDate('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title: title,
      date: date,
      location: location,
      id: uuidv4()
    }
    newEvent(event)
    resetInputs();
  }

  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
      <label>
        <span>Event Title</span>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
      </label>
      <label>
        <span>Event Date</span>
        <input type="date" onChange={e => setDate(e.target.value)} value={date} />
      </label>
      <label>
        <span>Event Location:</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="fergana">Farg'ona</option>
          <option value="tashkent">Tashkent</option>
          <option value="samarkand">Samarqand</option>
        </select>
      </label>
      <br /><br />
      <button>Submit</button>

    </form>
  )
}

export default NewEventForm
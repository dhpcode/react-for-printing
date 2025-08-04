import { useState } from 'react'
import './NewEventForm.css'

import { v4 as uuidv4 } from 'uuid';
uuidv4();

function NewEventForm() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const resetInputs = () => {
    setTitle('');
    setDate('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title: title,
      date: date,
      id: uuidv4() 
    }
    resetInputs();
    console.log(event)
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

      <br /><br />
      <button>Submit</button>

    </form>
  )
}

export default NewEventForm
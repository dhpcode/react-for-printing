// import { useState } from 'react'
import { useRef } from 'react';
import './NewEventForm.css'

import { v4 as uuidv4 } from 'uuid';
uuidv4();

function NewEventForm({ newEvent }) {
  // const [title, setTitle] = useState('');
  // const [date, setDate] = useState('');
  // const [location, setLocation] = useState('Fargona');

  const title = useRef();
  const date = useRef();
  const location = useRef('fargona');
  const form = useRef();
  console.log('rendering...')

  const resetInputs = () => {
    // setTitle('');
    // setDate('');
    // title.current.value = '';
    // date.current.value = '';
    // location.current.value = '';
    form.current.reset();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title.current.value,
      date: date.current.value,
      location: location.current.value,
      id: uuidv4()
    }
    newEvent(event)
    resetInputs();
  }

  return (
    <form ref = {form} className='new-event-form' onSubmit={handleSubmit}>
      <label>
        <span>Event Title</span>
        <input type="text" ref={title} />
      </label>
      <label>
        <span>Event Date</span>
        <input type="date" ref={date} />
      </label>
      <label>
        <span>Event Location:</span>
        <select ref={location}>
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
// style
import style from './EventList.module.css'
function EventList({events, handleDelete}) {
  return (
    <div>
      {/* kontent yo'q bo'lsa chiqadigan xabar */}
      {events.length === 0 ? <h2>No content available 😔</h2> : null}

      {events.map((event) => {
        return (
          <div className={style.card} key={event.id}>
            <h2>{event.title}</h2>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </div>
        )
      })}

    </div>

  )
}

export default EventList
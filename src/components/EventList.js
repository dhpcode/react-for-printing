import { Fragment } from "react"
function EventList({events, handleDelete}) {
  return (
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

  )
}

export default EventList
import React, { useState, useEffect } from 'react'
import '../css/Event.css'
import EventsAPI from '../services/EventsAPI'

const Event = (props) => {

    const [event, setEvent] = useState([])
    const [time, setTime] = useState('')

    useEffect(() => {
        (async () => {
            try {
                const eventData = await EventsAPI.getEventById(props.id)
                setEvent(eventData[0])
                console.log(eventData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    return (
        <article className='event-information'>
            <p className='text'>{event.name}</p>
        </article>
    )
}

export default Event
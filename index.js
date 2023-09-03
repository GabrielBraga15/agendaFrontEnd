import React, { useState } from 'react';
import './Agenda.css';

const Agenda = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Reunião com Cliente',
      date: '2023-07-18',
      time: '10:00',
      description: 'Discutir os requisitos do projeto.'
    },
    // Adicione outros eventos aqui
  ]);

  return (
    <div className="agenda">
      <h1>Agenda de Técnicos de Rede</h1>
      <div className="event-list">
        {events.map(event => (
          <div key={event.id} className="event-item">
            <h3>{event.title}</h3>
            <p>Data: {event.date}</p>
            <p>Hora: {event.time}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agenda;

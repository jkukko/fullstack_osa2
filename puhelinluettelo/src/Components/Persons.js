import React from 'react'

const Person = ({personsToShow}) => {
    const rows = () =>
        persons.map(personToShow => {
            <p key={person.id}>
                {person.name}
            </p>
        }
    )
    
    return (
        <div>
            <h2>Numerot</h2>
            {rows()}
        </div>
    )
}

export default Persons;
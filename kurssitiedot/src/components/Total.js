import React from 'react';


const Total = ({exercises}) => {

    const calcTotal = (s, p) => s + p

    return (
        <div>
            <p><strong>Total of {exercises.reduce(calcTotal)} exercises</strong></p>
        </div>
    )
}

export default Total
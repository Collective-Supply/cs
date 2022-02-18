import React from 'react'

export default function ViewCard({view}) {
    
    const timeStampConvert = (ts) => {
        let date = new Date(ts / 1000);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return (date.toDateString() + ' - ' + strTime)
    }


// console.log(formattedTime);

    return (
        <div className="card">
            <p>{view.viewer.name}</p>
            <p>{timeStampConvert(view.viewer._ts)}</p>
        </div>
    )
}

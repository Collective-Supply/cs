import React from 'react'
//import utcTimeConverter from '././utils/utcTimeConverter'
export default function ViewCard({view}) {
    
    const timeStampConvert = (ts) => {
        let date = new Date(ts / 1000);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return (date.toDateString() + ' - ' + strTime)
    }

    return (
        
        <div className="card">
            <img src={view.viewer.picture} alt={view.viewer.name} />
            <p>{view.viewer.name}</p>
            <p>{timeStampConvert(view._ts)}</p>
        </div>
    )
}

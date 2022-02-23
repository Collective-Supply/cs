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

    const viewerProfileImage = view.viewer.picture;
    const viewerName = view.viewer.name;
    const viewTime = view._ts

    return (
        <div className="card">
            <img src={viewerProfileImage} alt={viewerName} />
            <p>{viewerName}</p>
            <p>Unique share link: 
                <a 
                    href={`https://` + `www.linkedin.com/search/results/people/?keywords=${viewerName}&origin=CLUSTER_EXPANSION` } 
                    target="_blank" 
                    rel="noreferrer noopener"
                >
                    {`Search for ${viewerName} on LinkedIn`}
                </a>
            </p>
            <p>{timeStampConvert(viewTime)}</p>
        </div>
    )
}

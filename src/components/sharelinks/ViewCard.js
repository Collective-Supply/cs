import React from 'react'
import utcTimeConverter from './utcTimeConverter';

export default function ViewCard({view}) {

    const viewerProfileImage = view.viewer.picture;
    const viewerName = view.viewer.name;

    const viewTime = view._ts

    return (
        <div className="card">
            <img src={viewerProfileImage} alt={viewerName} />
            <p>{viewerName}</p>
            <p> 
                <a 
                    href={`https://` + `www.linkedin.com/search/results/people/?keywords=${viewerName}&origin=CLUSTER_EXPANSION` } 
                    target="_blank" 
                    rel="noreferrer noopener"
                >
                    {`Search for ${viewerName} on LinkedIn`}
                </a>
            </p>
            <p>Viewed on: {utcTimeConverter(viewTime)}</p>
        </div>
    )
}

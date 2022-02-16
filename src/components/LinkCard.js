import React from 'react'
import ViewList from './ViewList';

export default function LinkCard({link}) {  

    // const views = link.view_sessions.data;
    //below (line 8) should be correct on views
    const views = link.view_sessions.data;
    console.log("linkcard: views: " + views)
    return (
        <div className="card">
            <div className="card-header">
                {link.link_name}
            </div>
            <div className="card-body">
                <p>Share link: <a href={link.url}>{ `https://collective.supply/?x=${link.url}` }</a></p>
                <p>Job posting: {link.job_link}</p>
                {/* <p>Viewed by: {views.data[0].viewer.name} at time: {views.data[0]._id}</p> */}
                
                <ViewList views={views}/>
            </div>
            <div className="card-footer">
                <button className="btn btn-warning mr-2">
                    Disable
                </button>
                <button className="btn btn-danger">
                    Delete
                </button>
            </div>
        </div>
    )
}

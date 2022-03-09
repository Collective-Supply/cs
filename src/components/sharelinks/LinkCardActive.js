import React from 'react'
import ViewList from './ViewList';
import utcTimeConverter from './utcTimeConverter';

export default function LinkCardActive({link, refreshLinks }) {  

    // function called by disable button to disable a link
    const disableLink = async () => {
        const id = link._id
        const body = { id }
        try {
            await fetch('/api/toggleShareLinkInactive', {
                method: 'POST',
                body: JSON.stringify(body),
            });
            //calls the refresh link component function so that it shows the active link move to disabled link section
            refreshLinks();
        } catch (error) {
            console.error("Something went wrong with disabling a link", error)
        }
    } 
    
    const views = link.view_sessions.data;
    
    return (
        <div className="card">
            <div className="card-header">
                {link.link_name}
            </div>
            <div className="card-body">
                <p>Unique share link: <a href={`https://collective.supply/?x=${link.url}`}>{`https://collective.supply/?x=${link.url}`}</a></p>
                <p>{link.job_link}</p>
                <p>Updated on: {utcTimeConverter(link._ts)}</p>
                
                <ViewList views={views}/>
            </div>
            <div className="card-footer">
                <button className="btn btn-warning mr-2" onClick={disableLink}>
                    Disable Link
                </button>
            </div>
        </div>
    )
}

import React from 'react'
import ViewList from './ViewList';

export default function LinkCardDisabled({link, refreshLinks }) {  

    // function called by enable link button
    const enableLink = async () => {
        const id = link._id
        const body = { id }
        try {
            await fetch('/api/toggleShareLinkActive', {
                method: 'POST',
                body: JSON.stringify(body),
            });
            refreshLinks();
        } catch (error) {
            console.error("Something went wrong with enabling a link", error)
        }
    } 

     // function called by delete link button
    const deleteLink = async () => {
        const id = link._id
        const body = { id }
        try {
            await fetch('/api/sDelShareLink', {
                method: 'POST',
                body: JSON.stringify(body),
            });
            refreshLinks();
        } catch (error) {
            console.error("Something went wrong with deleting a link", error)
        }
    } 

    //below (line 8) should be correct on views
    const views = link.view_sessions.data;
    
    return (
        <div className="card">
            <div className="card-header">
                {link.link_name}
            </div>
            <div className="card-body">
                <p>Unique share link: <a href={`https://collective.supply/?x=${link.url}`}>{`https://collective.supply/?x=${link.url}`}</a></p>
                <p>{link.job_link}</p>
                
                {/* <p>Viewed by: {views.data[0].viewer.name} at time: {views.data[0]._id}</p> */}
                
                <ViewList views={views}/>
            </div>
            <div className="card-footer">
                <button className="btn btn-secondary mr-2" onClick={enableLink}>
                    Enable Link
                </button>
                <button className="btn btn-danger mr-2" onClick={deleteLink}>
                    Delete Link
                </button>
            </div>
        </div>
    )
}

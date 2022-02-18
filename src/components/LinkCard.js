import React from 'react'
import ViewList from './ViewList';

export default function LinkCard({link, refreshLinks }) {  

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
    // function called by enable link button
    const enableLink = async () => {
        const id = link._id
        const body = { id }
        try {
            await fetch('/api/toggleShareLinkActive', {
                method: 'POST',
                body: JSON.stringify(body),
            });
        } catch (error) {
            console.error("Something went wrong with enabling a link", error)
        }
    } 

    // const views = link.view_sessions.data;
    //below (line 8) should be correct on views
    const views = link.view_sessions.data;
    
    // Why the hell does this get run 8 times?!
    console.log(views)
    
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
                <button className="btn btn-warning mr-2" onClick={disableLink}>
                    Disable Link
                </button>
            </div>
        </div>
    )
}

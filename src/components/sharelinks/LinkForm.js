import React, { useState } from 'react';

export default function LinkForm({ profileId, refreshLinks }) {
    // use states for clearing out forms after submission
    const [link_name, setLinkName] = useState('');
    const [job_link, setJobLink] = useState('');

    // function to clear out the form after submission. '' means empty field
    const resetForm = () => {
        setLinkName('');
        setJobLink('');
    };

    // function for form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const profile = profileId;
        const body = { profile, link_name, job_link }
        try {
            await fetch('/api/createShareLink', {
                method: 'POST',
                body: JSON.stringify(body),
            });
            // clears out the form and refreshes the link list to show the new link
            resetForm();
            refreshLinks();
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="card">
            <div className="card-header">Add Link</div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="link_name">Name of your unique share link (e.g. Google senior designer application)</label>
                        <input
                            type="text"
                            name="link_name"
                            className="form-control"
                            value={link_name}
                            onChange={(e) => setLinkName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="job_link">URL of job posting *optional</label>
                        <textarea
                            name="job_link"
                            className="form-control"
                            value={job_link}
                            onChange={(e) => setJobLink(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Create Link
                    </button>
                </form>
            </div>
        </div>
    );
}
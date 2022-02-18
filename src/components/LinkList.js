import React from 'react';
import LinkCard from "./LinkCard";

export default function LinkList({links, refreshLinks}) {

  return (
    <div>
        <h3 className="my-4">Active Links</h3>
        {links && 
            links.filter(link => link.active).map((link) => ( 
                <LinkCard 
                    key={link._id} 
                    link={link} 
                    refreshLinks = {refreshLinks}
                />
            ))}

        <h3 className="my-4">Disabled Links</h3>
        {links && 
            links.filter(link => !link.active).map((link) => ( 
                <LinkCard 
                    key={link._id} 
                    link={link} 
                    refreshLinks = {refreshLinks}
                />
            ))}    
    </div>
  )
}

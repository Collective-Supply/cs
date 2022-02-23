import React from 'react';
import LinkCardActive from "./LinkCardActive";
import LinkCardDisabled from "./LinkCardDisabled";

export default function LinkList({links, refreshLinks}) {

  return (
    <div>
        <h3 className="my-4">Active Links</h3>
        {links && 
            links.filter(link => link.active && !link.s_del).map((link) => ( 
                <LinkCardActive
                    key={link._id} 
                    link={link} 
                    refreshLinks = {refreshLinks}
                />
            ))}

        <h3 className="my-4">Disabled Links</h3>
        {links && 
            links.filter(link => !link.active && !link.s_del).map((link) => ( 
                <LinkCardDisabled 
                    key={link._id} 
                    link={link} 
                    refreshLinks = {refreshLinks}
                />
            ))}    
    </div>
  )
}

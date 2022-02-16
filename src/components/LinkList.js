import React from 'react';
import LinkCard from "./LinkCard";

export default function LinkList({links}) {

    // console.log(links)
  return (
    <div>
        {links && links.map((link) => <LinkCard key={link._id} link={link} />)}
    </div>
  )
}

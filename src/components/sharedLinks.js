import './App.css';
import React, {useEffect, useState} from 'react';

//Grab all of the links
//display all of the links
//add delete and archive functionality?

function sharedLinks() {
 
  const loadProfile = async() => {
    const res = await fetch('/api/getSharedLinksAndViewSessionsBySub');
    const sharedLinks = await res.json();
    console.log(sharedLinks);
  };

  useEffect(() =>{
    loadProfile();
  }, []);

  return (
   <div className="container py-5">
     <h1 className="text-center mb-5">Shared Links</h1>
   </div>
  );
}

export default sharedLinks;

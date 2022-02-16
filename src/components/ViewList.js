import React from 'react';
import ViewCard from "./ViewCard";

export default function ViewList({views}) {
  return (
    <div>
        {views && views.map((view) => <ViewCard key={view._id} link={view} />)}
    </div>
  )
}

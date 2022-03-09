import React from 'react';
import ViewCard from "./ViewCard";

export default function ViewList({views}) {
  return (
    <div>
        <h4>Viewers</h4>
        {views && views
          .sort(function(x, y) {return y._ts - x._ts})
          .map((view) => <ViewCard key={view._id} view={view} />)}
    </div>
  )
}

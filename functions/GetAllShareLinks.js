/* This function pulls all the shared links that a designer user has 
created and displays them. This also includes all the viewers of the 
links.

Pass designer's Id to "SharedLinks" table and find all "link_id" 
records that have "user_id_designer" that match with the passed in 
designer's ID and return all of them for display. 
# backend-assignment-post-comments
a postgres database should be running on localhost with credentials in config.json / change them accordingly. 

to create tables - 
  npm run migrate

to start project -
  npm run dev
  
APIs -

  Create a Post -
    method: POST, Api: /api/posts/create, body: { title, description }
    
  Get all Posts -
    methid: GET, Api: /api/posts/
  
  Get a Comment to a Post -
    method: GET, Api: /api/comments/getCommentToComment/:comment_id
    
  Get a Comment to a Comment -
    method: GET, Api: /api/comments/getCommentToComment/:comment_id
    
  Create a Comment -
    method: POST, Api: /api/comments/create, body: { text, post_id, comment_id }

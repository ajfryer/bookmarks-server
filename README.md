# Bookmarks Server

Bookmarks Server App for the Bookmarks Client App

**requires authorization header with bearer token**

## install

`npm install`

## run

`npm run start`

## run with auto-reload on code change

`npm run dev`

## endpoints

### /bookmarks

```
GET /bookmarks

Responds with an array of bookmarks

Headers:
    Authorization (Bearer Token, required)
```

```
POST /bookmarks

Adds a new bookmark and responds with the id

Headers:
    Authorization (Bearer Token, required)

Body: (JSON object, required)
    { 
      "title": (string, required), 
      "url": (string, required), 
      "rating": (number, required), 
      "description": (string, optional)
    }
```

### /bookmarks/:id

```
GET /bookmarks/:id

Responds with a bookmark with uuid:id

Headers:
    Authorization (Bearer Token, required)
```

```
DELETE /bookmarks/:id

Deletes bookmark

Headers:
    Authorization (Bearer Token, required)
```
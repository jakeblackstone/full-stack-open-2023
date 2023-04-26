sequenceDiagram
participant Browser
participant Server
    Note left of Browser: Button on form clicked
    Browser ->> Server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note
    Note right of Server: Request to server from form <br/>submission to make new note
    Server -->> Browser: URL redirect to https://studies.cs.helsinki.fi/exampleapp/notes
    Note right of Server: HTTP code 302
    Browser ->> Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
    Server -->> Browser: HTML Code
    Browser ->> Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server -->> Browser: main.css
    Browser ->> Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
    Server -->> Browser: main.js
    Note left of Browser: Browser begins executing JS<br/>to pull JSON from server
    Browser ->> Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server -->> Browser: data.json
    Note left of Browser: Browser executes event handler<br/> to render notes

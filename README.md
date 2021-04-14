Emirp inventory
===

Public features
---

- get call for existing inventory
- show inventory on LandingPage (doesn't require login)

1 - get info from server
[x] page load sends dispatch with following action type
[x] saga for a GET call 
[x] action type: 'FETCH_INVENTORY'

2 - make data available for components thru redux store
[/]  put with action type of "SET_INVENTORY"
[ ] should be available to any component that uses Selector

User features
---

- show inventory on UserPage w/"buy" button for each item (requires login)
- create new item form in InfoPage (require login [eventually admin])
- PUT route should be protected (rejectUnauthenticated)

Admin features
---

- POST route should be protected (rejectUnauthenticated)
- POST route should require authorization (user.admin)


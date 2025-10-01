# README

### Tech Stack
- React 19
- Tailwind
- ShadCN
- Apollo Client (GraphQL)
- Recharts

### Functionality
Fetches launch data from SpaceX API, and user can then:
- view launch data
- select launch data entries
- view data visualisations based on selected entries


### Project Structure

```
/src
├─ /components       # React components (UI pieces)
├─ /graphql          # GraphQL queries, types
├─ /hooks            # Custom React hooks 
├─ /lib              # Core infrastructure & app-level utilities
├─ /utils            # Pure domain logic / helper functions
├─ constants.ts      # App-wide constants
├─ app.tsx           # Root component
├─ main.tsx          # App entry point
├─ index.css         # Global styles
```


### Challenges
The API was a little cumbersome to work with. Some fields were documented on the documentation graph, but were null across all entries.
Furthermore, many launches had identical data, making the visualisations monotonous on their own, so a randomizer for the rocket mass was added to add some *pizzazz* to the data.

Lastly, I've had very little exposure to GraphQL and Recharts until now, so it was a fun task to work with them.

### TODOs
In the future I'd like to focus some more on user experience and CSS. Make it look better on smaller screens, xl screens, and add some cool animations using framer motion.

Of course there's ground to be gained outlined in the instructions, like dealing with permissions, but I couldn't find a good use case with the data from the API.

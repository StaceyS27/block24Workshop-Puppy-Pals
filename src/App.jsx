import { useState } from 'react'
import './App.css'
import { puppyList } from './data.js'
//import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setfeatPupId] = useState(null);
  //console.log(puppyList);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <div>
      {
        puppies.map((puppy) => {
          return <p onClick={() => { setfeatPupId(puppy.id) }} key={puppy.id}>{puppy.name}</p>
        })
      }


      {featPupId && (
        <div className = "moreInfo">
          <h2>{featuredPup.name}</h2><ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )
      }

    </div>
  )
}

export default App

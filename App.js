import React, { useState } from 'react'
import AddPersonForm from './AddPersonForm'
import PeopleList from './PeopleList'
import React, { useState } from 'react'

const App = () => {
   const [name, setName] = useState(["James Smith", "Thomas Anderson", "Bruce Wayne"]);

   return (
     <div>
       <AddPersonForm setName={setName}/>
       <PeopleList name={name}/>
     </div>
   )
}

export default App 
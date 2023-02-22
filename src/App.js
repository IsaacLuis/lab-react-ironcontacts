import './App.css';
import { useState } from 'react';
import contacts from './contacts.json';

function App() {

  const [allContacts, setAllContacts] = useState(contacts.slice(0,5))

 // () => console.log(contacts[Math.floor(Math.random()*contacts.length)])

    const addRandom = () => {

      let remainingContacts = contacts.filter((contact) => {
        return !allContacts.some((remainingContact) => remainingContact.id === contact.id)
      })

      let newContacts = [...allContacts]

      newContacts.push(remainingContacts[Math.floor(Math.random()*remainingContacts.length)])

      setAllContacts(newContacts)

      console.log(remainingContacts)

    }

    const sortAlphabet = () =>  {

      let newContacts = [...allContacts]

      newContacts
      .sort(function(a, b) {
        if(a.name< b.name.toLowerCase()) return -1;
        if(a.name> b.name.toLowerCase()) return 1;
        return 0;
       })
      
    

setAllContacts(newContacts)


    }



 const sortPop = () =>  {

      let newContacts = [...allContacts]

      newContacts
      .sort(function(a, b) {
        if(a.popularity> b.popularity ) return -1;
        if(a.popularity< b.popularity ) return 1;
        return 0;
       })
      
    

setAllContacts(newContacts)


    }



    const deleteContact = (contactId) => {

      let filteredContacts = allContacts.filter(contact => {
          return contact.id !== contactId;
        })

        setAllContacts(filteredContacts);
      }


  
        const wonOscar = (contact) => {
          if (contact.wonOscar === true)
            return (
              <p>🏆</p>
            )
        }
  
        const wonEmmy = (contact) => {
          if (contact.wonEmmy === true)
            return (
              <p>🏆</p>
            )
        }

  
      return (
        <div className="App">
          <button onClick={addRandom}>Add New Contact</button>
          <button onClick={sortAlphabet}>Sort Contact</button>
          <button onClick={sortPop}>Sort Contact by Popularity</button>
          
          <table>

            <thead>

              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won Oscar</th>
                <th>Won Emmy</th>
              </tr>

            </thead>

            <tbody>

              {
                allContacts.map((contact) => {
                  return (
                      <tr key={contact.id}>
                        <td><img src={contact.pictureUrl} alt="pfp"></img></td>
                        <td>{contact.name}</td>
                        <td>{contact.popularity.toFixed(2)}</td>
                        <td>{wonOscar(contact)}</td>
                        <td>{wonEmmy(contact)}</td>
                        <td>  < button onClick= {()=>  deleteContact(contact.id) }>Delete</button> </td> 
                      </tr>
                  )
                })
              }


            </tbody>

          </table>
    </div>
      )

  
}

export default App;
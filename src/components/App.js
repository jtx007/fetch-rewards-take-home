import React, {useEffect, useState} from 'react'
import fetchListItems from '../api/index'
import '../App.css';

function App() {

  const [listItems, setListItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')


  useEffect(() => {
    const fetchList  = async () => {
      try {
        const response = await fetchListItems.get()
        const data = await response.data
        setListItems(data)
      } catch (e) {
        setError(e.message)
      }
      
    }
    fetchList()
  },[])


  const displayListItems = () => {
    
  }


  return (
    <div className="App">
     
    </div>
  );
}

export default App;

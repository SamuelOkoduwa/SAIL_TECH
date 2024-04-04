import { useEffect, useState } from "react"
import Card from "./components/Card"


function App() {

  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    fetchData()
    setLoading(true)
  }, [])


  const fetchData = async()=>{
    try{
      let resp = await fetch('https://660e6f5a6ddfa2943b36c6fa.mockapi.io/API_testing')
      
      let userData = await resp.json()
        console.log(userData)
        setResult(userData)
        setLoading(false)
      
    }
    catch{
      (err)=>{
        return console.log(err)
      }
    }
  }

  

  return (
    <>
      <h1>Fetch data Sample</h1>
      {result.length}
      {/* {
        loading ? <p>please wait, loading...</p>
      } */}
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {
          result.map((user)=>{
            <Card  
            name={user.name} 
            gender={user.gender}
            email={user.email}
            image={user.avatar} 
            />
          })
        }
      </div>
      <Card name='Dim Makar' email='dummy@email.com' gender='Hemaphrodite'/>
    </>
  )
}

export default App

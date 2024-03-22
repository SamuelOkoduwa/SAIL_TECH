import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product'
import Test from './components/Test'

// function App() {
//   const [count, setCount] = useState(0);
//   const collections = ['David', 'James', 'John', 'Precious']

//   return (
//     <>
//       <h1>List of Deptors</h1>
//       <ul>
//         {
//           collections.map((item, index) => {
//             return(
//               <li key={index}>{item}</li>
//             )
//           })
          
//         }
//       </ul>
//     </>
//   )
// }

// function createProduct(productDescription){
//   return(
//     <>
//       <h1>Product Page</h1>
//       <div style={{display: 'flex', gap:'20px'}}>
//         <Product item="Computing" productImage="./src/assets/computing.jpg" price="86,000" />
//         <Product item="Computing" productImage="./src/assets/generators.jpg" price="86,000" />
//         <Product item="Computing" productImage="./src/assets/refrigerator.jpg" price="86,000" />
//         <Product item="Computing" productImage="./src/assets/sneakers.jpg" price="86,000" />

//       </div>
//     </>
//   )
// }

function App(){
  return(
    <>
      <h1>Product Page</h1>
      <div style={{display: 'flex', gap:'20px'}}>
      {Test.map((product, index) => {
          return(
            <div  key={index} >
              <Product  item={product.productName} productImage={product.productImage} price={product.productPrice} />
            </div>
          )
        })}
      </div>
        
      
    </>
  )
}

// function App(){
//   return(
//     <>
//       <h1>Product Page</h1>
//       <div style={{display: 'flex', gap:'20px'}}>
//         <Product item="Computing" productImage="./src/assets/computing.jpg" price="86,000" />
//         <Product item="Computing" productImage="./src/assets/generators.jpg" price="86,000" />
//         <Product item="Computing" productImage="./src/assets/refrigerator.jpg" price="86,000" />
//         <Product item="Computing" productImage="./src/assets/sneakers.jpg" price="86,000" />

//       </div>
//     </>
//   )
// }

export default App

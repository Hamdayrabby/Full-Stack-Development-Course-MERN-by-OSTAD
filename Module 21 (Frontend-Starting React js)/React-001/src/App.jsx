import React from 'react';
import HomePage from './pages/HomePage';
import "./assets/styles/index.css";
import { ProductCard } from './components/ProductCard';
import Navbar from './components/Navbar';

const App = () => {

      const name = "Auni";
      let product = "Laptop";
      let age = "18";

      const buttonClick = () => {
            alert("Button clicked");
      }

      const divStyle = {
            color: "red",
            padding: "10px",
            backgroundColor: "yellow",
      }

      const isLoggedIn = true;

      const district = ["Dhaka", "Chittagong", "Khulna", "Barisal", "Rajshahi"];


      return (
            <div>
                  <Navbar />
                  <h1>Hello {name}</h1>
                  <h2>Product: {product}</h2>
                  <p> You {age == 18 ? "can vote" : "cannot vote"}</p> {/*conditional rendering*/}
                  <h1 className='title'>Hello</h1>
                  <button onClick={buttonClick}>Click me</button>

                  <div style={divStyle}> {/* external style */}
                        <p>Hello</p>
                  </div>
                  <div style={{ color: "blue", backgroundColor: "pink" }}>{/* inline style */}
                        <h1>This is inline style.</h1>
                  </div>
                  {
                        isLoggedIn && <p>Go to dashboard</p>
                  }
                  {
                        isLoggedIn ? <p>You are logged in</p> : <p>You are not logged in</p>
                  }

                  <ul>
                        {
                              district.map((item) => (
                                    <li>{item}</li>
                              )
                              )

                        }
                  </ul>
                  {<ProductCard />}

                  <div>
                        {
                              (() => {
                                    const a = 20;
                                    const b = 30;
                                    return a + b;
                              })()
                        }
                  </div>
            </div>
      )

};

export default App;

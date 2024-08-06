import React from "react"
import ReactDOM from "react-dom/client"
import "./style.css"
import one from "./asset/images/img1.jpeg"
import two from "./asset/images/img2.jpeg"
import three from "./asset/images/img3.jpeg"

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(
<div>
<Navbar></Navbar>
<Searchbar></Searchbar>
<Product></Product>
<Footer></Footer>
</div>
)

        function Navbar(){
            return(
            <nav>
            <h1>Perfumy</h1>
          <ul>
          <li>Home |</li>
          <li>Products |</li>
          <li>About |</li>
          <li>Contact </li>
          </ul>
          </nav>
          )}


          function Searchbar(){
            return(
         
          <div>
            <input type="text" placeholder="Search" className="search_bar"></input>
          </div>
         
            )}



function Footer()
{
return(
  <footer>
   <div className="contact">
        <h1>CONTACT</h1>
        <p style={{marginTop: "5px"}}>+91 3478631928 <br></br>
           perfumy@gmail.com
       </p>

   </div>
   <p style={{fontSize: "small", padding: "20px",color: "grey"}}>
   W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.

   Copyright 1999-2023 by Refsnes Data. All Rights Reserved.
   W3Schools is Powered by W3.CSS.
  </p>

</footer>
)
}

function Product(){

    return(
    <div className="products">
             
                <div className="box">
                 
                  <img src={three} alt="perfume"></img>
                  <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
                </div>
                   
               
                <div class="box">
                    <img src={one} alt="perfume"></img>
                    <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
                </div>
                <div class="box">
                    <img src={two} alt="Designs Club"></img>
                    <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
                </div>
               
                </div>
            )
            }






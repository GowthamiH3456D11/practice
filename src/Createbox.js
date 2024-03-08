import React from "react";
import './App.css';


function Createbox() {

    return (

        <div>
        <div>
            <input type="text" class="t1"  value="Welcome To React JS"></input>&nbsp;&nbsp;&nbsp;
        </div>
        <br/>

    <div class="box">
    &nbsp;&nbsp;
        <div class="t2">
            <p>React is a JavaScript library for building user interfaces. React is used to build single-page applications. 
                React allows us to create reusable UI components.
</p>
        </div>
        &nbsp;&nbsp;
        <div class="t2">
            <p>JavaScript is a scripting language used to develop web pages. Developed in Netscape, JS allows developers to create a 
                dynamic and interactive web page to interact with visitors and execute complex actions.</p>
        </div>

        {/* <input type="text" value="qwwerruiijfhhfjkdjdh" class="t2" ></input>&nbsp;
        
        <input type="text" class="t2" ></input>  */}
        

    </div>&nbsp;
    
    <div>
    <br/>
            <input type="text" class="t3" value="Footer" ></input>
        </div>
    </div>

    );

}

export default Createbox
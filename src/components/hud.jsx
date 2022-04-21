import React, { useEffect } from 'react';


export default function Hud() {

    useEffect(() => {






    }, []);

    return( 
        <>
        
        <div id="hud">
            <h1 style={{fontSize: "2rem", margin:"0"}}> Christopher Waddington </h1> 
            <h2 style={{fontSize:"1.5rem"}}> Web Developer / Programmer </h2>
            
            <ul>
                <li style={{textDecoration:"underline", fontSize: "1.2rem"}}> <a target="_blank" href="https://github.com/chrislikescode">Github</a></li>
                <li style={{textDecoration:"underline", fontSize: "1.2rem"}}> <a target="_blank" href="https://leetcode.com/ChrisWaddington/">LeetCode</a></li>
                <li style={{textDecoration:"underline", fontSize: "1.2rem"}}> <a target="_blank" href="https://www.linkedin.com/in/chriswaddington06/">LinkedIn</a></li>

            </ul>

            <h2 style={{marginTop: "50px"}}>My Wordpress Website Builds </h2> 
            <ul>
                <li style={{textDecoration:"underline", fontSize: "1.2rem"}}> <a target="_blank" href="https://vocodia.com">vocodia.com</a></li>
                <li style={{textDecoration:"underline", fontSize: "1.2rem"}}> <a target="_blank" href="https://legacy-probate.com"> legacy-probate.com</a></li>
                <li style={{textDecoration:"underline", fontSize: "1.2rem"}}> <a target="_blank" href="https://morocoorthodontics.com">morocoorthodontics.com</a></li>
                <li style={{textDecoration:"underline", fontSize: "1.2rem"}}> <a target="_blank" href="https://rejuvaestheticsmd.com">rejuvaestheticsmd.com</a></li>
                <li style={{textDecoration:"underline", fontSize: "1.2rem"}}> <a target="_blank" href="https://sundyvillage.com">sundyvillage.com</a></li>
            </ul>

            <h2 style={{marginTop: "50px"}}>My React Website Builds </h2> 
            <ul>
                <li style={{textDecoration:"underline", fontSize: "1.2rem"}}> <a target="_blank" href="https://makeawhale.com"> makeawhale.com</a></li>
            </ul>

            <h2 style={{marginTop: "50px"}}>My Shopify Website Builds </h2> 
            <ul>
                <li style={{textDecoration:"underline", fontSize: "1.2rem"}}> <a target="_blank" href="https://nextstardistribution.com/"> nextstardistribution.com</a></li>
                <li style={{textDecoration:"underline", fontSize: "1.2rem"}}> <a target="_blank" href="https://natalieredd.com/"> natalieredd.com/</a></li>

            </ul>



        </div>
        
        
        
        
        </>




    )



};
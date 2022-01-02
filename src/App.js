import React, { useEffect, useState } from "react";
import axios from 'axios';

function App(){
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            console.log(res.data)
            setPosts(res.data)
        })
    }, []);

    function rand() { return Math.floor(Math.random() * 255) }
    
    return(
            <>
            {   posts.map((item)=>{
                
                return (
                  <>
                    <div class="col-sm-6">
                        <div className="card mx-2 my-1 bg-light">
                          <div key={item.userId+1} 
                          style={{backgroundColor:`rgb(${rand()}, ${rand()}, ${rand()})`}}
                          className="card-header text-dark"></div>
                          <div className="card-body bg-warning rounded thumbnail">
                            <h5  key={item.id+1+"title"} className="card-title text-danger text-uppercase">
                              {item.id} . {item.title}
                            </h5>
                            <p  key={item.id+1+"body"} className="card-text text-success">{item.body}</p>
                          </div>
                        </div>
                    </div>
                  </>
                );
            })
            }
            </>        
    )
    
}
export default App;
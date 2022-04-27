import { useEffect, useState } from "react";

export const Counter = ({start,end}) =>{


    const [count,SetCount] = useState(start)

    useEffect(

       ()=>{
        
            
            
             let id =setInterval(() => {
            
                    SetCount((prevValue)=>{
                        
                        if(prevValue>=end-1)
                        {
                            clearInterval(id)
                        }

                    return(prevValue+1)
                })
    
            }, 1000);


            return ()=>{


                clearInterval(id);
                
            }
            

       },[]

    )

    return( <div>
        <h3>Count : {count}</h3>
    </div> );

}
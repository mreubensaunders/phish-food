import React, {useEffect, useState} from 'react';
import Loading from './Loading'
import LoadingAlt from './LoadingAlt'

export default function LoadingTestPage(){    

    const [count, setCount] = useState(0);    

    useEffect(() => {
        console.log(count)
    })

    return(     
        
        <div className="flex w-100 h-100 items-center justify-center pt7">
            <LoadingAlt/>
            <Loading/>
        </div>     
        
    )
}
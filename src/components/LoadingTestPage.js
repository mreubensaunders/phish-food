import React, {useEffect, useState} from 'react';
import Loading from './Loading'
import LoadingAlt from './LoadingAlt'

export default function LoadingTestPage(){    

    const [count, setCount] = useState(0);    

    useEffect(() => {
        console.log(count)
    })

    return(
        <div>
            <LoadingAlt/>
            <Loading/>
        </div>
    )
}
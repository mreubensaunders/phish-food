import React, {useEffect, useState} from 'react';

export default New = () => {    

    const [count, setCount] = useState(0);    

    useEffect(() => {
        console.log(count)
    })

    return(
        <div style={{backgroundColor: 'black', width: '100px', height: '100px' }} onClick={() => {setCount(count + 1)}}>{count}</div>
    )
}
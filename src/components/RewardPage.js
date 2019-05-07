import React, { Fragment, useState } from 'react'
import {
  Redirect
} from 'react-router-dom'


export default function RewardPage() {    
      return (       
        <Fragment>
           <div className="rwd-container rwd-purple">                      
           <h1 class="f5 f4-ns fw6 white">Award a point</h1>
           <input></input>
           <i class="far fa-share-square rwd-icon rwd-green"></i>
           <input></input>
            {/*<i class="fas fa-hand-holding-heart rwd-icon rwd-green"></i>*/}
           </div>
        </Fragment>
      )
}
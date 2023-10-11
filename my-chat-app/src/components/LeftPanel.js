import React from 'react'
import './LeftPanel.css'

function LeftPanel() {
    return (
        <div className='left-panel'>
            <ul class="panel-options" >
                <li class="panel-item" >Home </li>
                <li class="panel-item" >Trending</li>
                <li class="panel-item" >Freinds</li>
                <li class="panel-item" >Event </li>
                <li class="panel-item" >Memory</li>
                <li class="panel-item" >Save Post</li>
            </ul>

            <h6 className='pages-you-like'>Pages You Like</h6>
            <ul class="panel-options">
                <li class="panel-item" >Facebook </li>
                <li class="panel-item" >Twitter</li>
                <li class="panel-item" >LinkedIn</li>
              
            </ul>

        </div>
    )
}

export default LeftPanel
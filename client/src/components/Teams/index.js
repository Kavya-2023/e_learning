import React from 'react'
import './index.css';
const Teams = () => {
  return (
    <div class="teams-container">
        <h2>Our Team</h2>
  <div class="row-teams">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="https://picsum.photos/130/130?image=1027"/>
        </div>
        <div class="team-content">
            <h3 class="name">Umadevi</h3>
          <h4 class="title">CEO</h4>
          
        </div>
      </div>
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="https://picsum.photos/130/130?image=839"/>
        </div>
        <div class="team-content">
          <h3 class="name">Mahesh S Reddy</h3>
          <h4 class="title">Founder and CEO</h4>
        </div>
    </div>
  </div>
</div>
  )
}

export default Teams

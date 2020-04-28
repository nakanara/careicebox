import React from 'react';
import './FoodHistory.scss';

function FoodHistory(){

  return (
    <div>    
      <div className="timeline">
        <div className="item">
          <div class="image">
            <div>
              <img src="http://lorempixel.com/400/400/people/1/" />
              <span>
              09.12.2016
              </span>
            </div>
          </div>
          <div className="details">
            <div>
              <h1>Phasellus pharetra</h1>
              <p>Proin condimentum tempus ultrices. Suspendisse vestibulum suscipit erat, ac efficitur lorem. Nullam non ex vel turpis imperdiet maximus sit amet nec odio. Donec mauris nisl, vestibulum id efficitur at, convallis id dui. Sed enim nisl, ultrices vitae sodales eu, vestibulum a mi. Morbi consectetur pulvinar sagittis. Phasellus pharetra diam id leo gravida pharetra. In rutrum est gravida, maximus mi ac, mattis metus. Ut at tempus sem. Vivamus condimentum erat eget aliquet dignissim. </p>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="image">
            <div>
              <img src="http://lorempixel.com/400/400/people/3/" />
              <span>
              08.12.2016
              </span>
            </div>
          </div>
          <div className="details">
            <div>
              <h1>Proin consectetur</h1>
              <p>Quisque vestibulum iaculis felis eget varius. Morbi bibendum lectus felis, sed vehicula purus pellentesque eu. Maecenas sit amet libero vel nunc porta tincidunt fringilla nec mauris. Phasellus pharetra pharetra massa. Ut maximus purus eget libero dapibus, sit amet ultricies eros auctor. Nulla tristique dui nec libero rhoncus, et dictum odio lobortis. Proin consectetur nec sapien hendrerit lobortis. Proin mi odio, mollis ac ullamcorper in, pellentesque non nulla. In pretium purus at posuere efficitur. Donec eget cursus quam, in mollis libero. Mauris tempor volutpat sodales. Nulla in odio nec metus elementum ultricies sit amet vel dolor. Nunc non ligula at libero eleifend consectetur nec eu felis. Sed tristique vel ante eu pulvinar. Pellentesque elementum congue iaculis. Integer lorem sapien, vestibulum sed semper sed, dictum nec purus. Aenean porttitor interdum iaculis. </p>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="image">
            <div>
              <img src="http://lorempixel.com/400/400/people/8/" />
              <span>
              07.12.2016
              </span>
            </div>
          </div>
          <div className="details">
            <div>
              <h1>Duis porta urna</h1>
              <p>In nulla mi, ultrices et ullamcorper molestie, rhoncus at purus. Nulla et metus elementum, molestie lectus eget, pretium sapien. Duis dapibus libero id vehicula sodales. Curabitur augue tellus, lacinia ac turpis sit amet, facilisis finibus mauris. Mauris laoreet neque nisi, id hendrerit diam cursus ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis porta urna ligula, nec consequat libero congue quis. Nulla convallis enim sed dolor viverra, eget dapibus lorem ultricies. Nullam et neque vitae nulla faucibus sollicitudin eget sit amet justo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodHistory
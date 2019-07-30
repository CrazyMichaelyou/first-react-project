import React from 'react'

import ImageZoom from 'react-medium-image-zoom'

 var MyComponent = function(props) {
    return (
      <div>
        
   
        <ImageZoom
          image={{
            src: 'https://www.picsum.photos/200/30',
            alt: 'Golden Gate Bridge',
            className: 'img',
            style: { width: '70em' }
          }}
          zoomImage={{
            src: '',
            alt: 'Golden Gate Bridge'
          }}
        />
   
       
      </div>
    )
  }
  export default MyComponent
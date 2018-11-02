import React from 'react';
import './Doodle.css';


class FutureDoodle extends React.Component {

  render() {
    return(
      <div className='doodle-code'>
        <pre>
          <code className='language-markup'>
          {`<body>
            
</body>
`}
          </code>
        </pre>
      </div>
    )
  }
}

export default FutureDoodle;

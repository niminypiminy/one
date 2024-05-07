import React from 'react'

const Component4 = (props) => {
  return (
    <>
      <div className="component4-container"></div>
      <style jsx>
        {`
          .component4-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Component4

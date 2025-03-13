import React from 'react';

const Matrix = ({ columns = 3, cellWidth = 400, cellHeight = 200, children }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, ${cellWidth}px)`,
    gap: '10px',
    justifyContent: 'center'
  };

  const cellStyle = {
    width: cellWidth,
    height: cellHeight,
    overflow: 'hidden'
  };

  return (
    <div style={gridStyle}>
      {React.Children.map(children, (child, index) => (
        <div key={index} style={cellStyle}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default Matrix;

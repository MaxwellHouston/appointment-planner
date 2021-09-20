import React from "react";


export const Tile = (props) => {
  
  const renderTile = (obj) => {
    let tile = [];
    for(const key in obj){
      if(!tile.length){
        tile.push(<p key={tile.length} className='tile-title'>{obj[key]}</p>)
      }else{
        tile.push(<p key={tile.length} className='tile'>{key}: {obj[key]}</p>)
      }
    };
    
    return tile;
  }
  return (
    <div className="tile-container">
      {renderTile(props.obj)}
    </div>
  );
};

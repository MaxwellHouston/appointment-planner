import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = (props) => {

  const renderTiles = (array) => {
    let tiles = [];
    for(const obj of array){
     tiles.push(<Tile obj={obj} key={`list${tiles.length}`} />);
    }
    return tiles;
  }


  return (
    <div>
      {renderTiles(props.array)}
    </div>
  );
};

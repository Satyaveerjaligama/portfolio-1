import React from "react";

interface TechnologyTilesProps {
    list: string[],
}

const TechnologyTiles = (props: TechnologyTilesProps) => {
    const {list} = props;

    return (
        <>
            {list.map((listItem: string)=>
                <div className="technology-tile" key={listItem}>
                    {listItem}
                </div>
            )}
        </>
    )
}

export default TechnologyTiles;
import React from "react";

const UpComingEvent = () => {
  return (
    <React.Fragment>
      <div className="w-[100%] flex flex-row gap-x-1 p-3 space-x-2 items-start justify-end select-none border border-black rounded-md">
        <div className="w-[100%] flex flex-col gap-y-2">
          <span className="text-xs">2023-01-11</span>
          <span className="text-sm font-poppins font-semibold overflow-x-hidden  max-[1067px]:text-xs line-clamp-3">
            The consequences of rampant deforestation are far-reaching and dire.
            Loss of biodiversity, disrupted water cycles, and increased carbon
            emissions are just a few of the domino effects that reverberate
            across the globe. Indigenous communities, who have coexisted
            harmoniously with these ecosystems for generations, are facing
            displacement and the erosion of their traditional ways of life.
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UpComingEvent;

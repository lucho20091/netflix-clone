import React from 'react';

const Jumbotron = ({...props}) => {
  return (
    <div className="px-4 py-20 text-white max-w-screen-lg mx-auto">
      <div className={`max-w-7xl mx-auto flex flex-col ${props.direction === "row" ? "lg:flex-row" : "lg:flex-row-reverse"} items-center`}>
        <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {props.title}
          </h1>
          <p className="text-lg sm:text-2xl">
            {props.subTitle}
          </p>
        </div>
        <div className="flex-1">
            <img src={props.image} alt={props.alt} />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;

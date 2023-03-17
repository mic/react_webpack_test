import * as React from "react";

function Thumb(src: string, alt: string) {
    return (
      <img
        src={src}
        alt={alt}
      />
    );
  }

  function Result() {
    const runtimeData = import("./data.json")
		.then((data) => {
            console.log(data);
			return data;
		})
	
	

    return (
        <div>Hallo</div>
    );
  }

  
  export default Result
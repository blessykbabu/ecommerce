
import { useState } from "react";
// import ClipLoader from "react-spinners/ClipLoader";
import {css} from '@emotion/react';
const override=css`
display:block;
margin:0 auto;`
;

function Loading() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("blue");

  return (
    <div className="sweet-loading d-flex justify-content-center ">
     

      {/* <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={90}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}

<div class="spinner-grow" role="status">
  <span class="sr-only">Loading...</span>
</div>
    </div>
  );
}

export default Loading;
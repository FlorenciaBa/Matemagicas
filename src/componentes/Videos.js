import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import HeadreA from './HeadreA';


export default function App() {
  return (
    <>
    <HeadreA/>
    <MDBContainer>
      <div className="ratio ratio-16x9">
        <iframe
          src="https://player.vimeo.com/video/137857207"
          title="Vimeo video"
          allowfullscreen
        ></iframe>
      </div>

<br></br>
      <div className="ratio ratio-16x9">
        <iframe
          src="https://player.vimeo.com/video/137857207"
          title="Vimeo video"
          allowfullscreen
        ></iframe>
      </div>
      

    </MDBContainer>
    </>
  );
}
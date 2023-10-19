import React from "react";

const CommunityOwned = () => {
  return (
    <div className="serviceContainer">
      <div className="flex container-fluid">
        <div className="boxLeft">
          <h2 className="text-secondary Community-owned-text mb-4">
            COMMUNITY-OWNED AND OPERATED
          </h2>
          <h1 className="universe-text color-white">
          Venture into an innovative sphere of cohesive services.
          </h1>
          <p className="my-4 universe-text-paragraph">
          Web3Wave applications and offerings interface through IBC, the Inter-Blockchain Communication standard. 
          This breakthrough allows seamless asset and data transfer across independent chains.
          </p>
          <div className="btn-container">
            <div className="btn btn-light myBtn btn-lg">
              Learn
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </div>
            <div className="btn myBtn mx-4 color-white btn-lg">
              Explore tokens
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="boxRight">
          <div className="boxCount before">
            <h1 className="headingcount color-white">
              248<sub>+</sub>
            </h1>
            <p className="color-white">Apps & services, and growing.</p>
          </div>

          {/* <div className="usd_title_wrap"> */}
          <small className="usd-heading"> USD</small>
          {/* </div> */}

          <div className="boxCount">
            <h1 className="headingcount color-white">
              $42B<sub>+</sub>
            </h1>

            <p className="color-white">Digital assets under management.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityOwned;

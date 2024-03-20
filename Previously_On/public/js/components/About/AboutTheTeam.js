import React from "react";

class AboutTheTeam extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="section-w-image">
        <div className="row">
          <div className="col-sm-6 about-img">
            <p />
          </div>
          <div className="col-sm-6 col-sm-offset-6 about-description">
            <h4>ABOUT MYTVLIST</h4>
            <p>
              MyTVList is a parody of MyAnimeList.net, it was made for a 
              school project to learn React with MyBetaSeries API
            </p>
            <p>
              I mainly used Node JS, React, Redux, Express, MongoDB & Mongoose for this project.
            </p>

            <h4 className="space-top">HOW IT WAS MADE</h4>
            <p>
              <strong>PAIN</strong> <span className="pull-right">90%</span>
            </p>
            <div className="progress progress-label">
              <div
                className="progress-bar progress-bar-default animated first fadeInLeft skill-1"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                // style="width: 90%"
              />
            </div>
            <p>
              <strong>Node JS</strong>{" "}
              <span className="pull-right">70%</span>
            </p>
            <div className="progress progress-label">
              <div
                className="progress-bar progress-bar-primary animated second fadeInLeft skill-2"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                // style="width: 80%"
              />
            </div>

            <p>
              <strong>ReactNATIVE</strong>{" "}
              <span className="pull-right">45%</span>
            </p>
            <div className="progress progress-label">
              <div
                className="progress-bar progress-bar-success animated third fadeInLeft skill-3"
                role="progressbar"
                aria-valuenow="45"
                aria-valuemin="0"
                aria-valuemax="100"
                // style="width: 90%"
              />
            </div>

            <p>
              <strong>JavaScript</strong> <span className="pull-right">85%</span>
            </p>
            <div className="progress progress-label">
              <div
                className="progress-bar progress-bar-info animated fourth fadeInLeft skill-4"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
                // style="width: 80%"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutTheTeam;

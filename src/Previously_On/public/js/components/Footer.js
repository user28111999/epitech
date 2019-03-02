import React from "react";
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <footer>
    <div className="container">
        <p className="footer-info">© MyTVList.net is a property of MyAnimeList, LLC. © 2019 All Rights Reserved. 
            <span className="social pull-right">
            <a target="_blank" href="https://www.betaseries.com/api/">API </a>
                <a target="_blank" href="https://myanimelist.net/about/terms_of_use"> Terms & Conditions</a>
                <a target="_blank" href="mailto:admin@mytvlist.net"> Contact</a>
            </span>
        </p>
    </div>
</footer>
    );
  }
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import MyNuts from "../Nuts/MyNuts";
import SerieSeasons from "./SerieSeasons";

class SerieSingle extends React.Component {
	constructor() {
		super();
		this.state = {
			returnSeriesFromAPI: {}
		};
	}

	componentDidMount() {
		var thisIsThis = this;
		fetch(
			`https://api.betaseries.com/shows/display?key=0ba964b97be8&id=${
				thisIsThis.props.selectedSerie
			}`
		)
			.then(response => response.json())
			.then(function(datas) {
				thisIsThis.setState({
					returnSeriesFromAPI: datas.show
				});
			})
			.catch(error => console.log("erreur fetch NouveautesList" + error));
	}

	render() {
		var categs = this.state.returnSeriesFromAPI.genres;
		if (categs != undefined) {
			var categs = categs.join(" - ");
			var urlstreaming = `https://torrents.me/s/${
				this.state.returnSeriesFromAPI.title
			}`;
		}

		if (this.state.returnSeriesFromAPI.images) {
			var imagesingle = this.state.returnSeriesFromAPI.images.show;
		} else {
			var imagesingle = "./images/default-poster-white.jpg";
		}
		const divStyle = {
		  	background: 'url(' + imagesingle + ')',
			backgroundSize:     'cover',
			backgroundPosition: 'center',
			backgroundColor:    '#ccccc'
		};
		return (
		<div>
			<div className="header-banner" style={divStyle}>
				<div className="banner-content text-center">
					<div className="banner-info">
						<h2>{this.state.returnSeriesFromAPI.title}</h2>
					</div>
				</div>
			</div>
			<section id="project">
				<div className="row">
					<div className="container">
						<div className="row">
							<div className="col-sm-6">
								<h4>Overview</h4>
								<p>{this.state.returnSeriesFromAPI.description}</p>
								<h4>
									Total Seasons : {this.state.returnSeriesFromAPI.seasons}{" "}
								</h4>
								<br />
								<SerieSeasons
									content={this.state.returnSeriesFromAPI.seasons_details}
								/>
								<br />
							</div>
							<div className="col-sm-6 project-sidebar right">
								<div className="section-description light">
									<h4>Details</h4>
									<div className="project-info">
										<div className="info">
											<p>
												<i className="lnr lnr-user" />
												<span>
													<strong>Provider:</strong>{" "}
													{this.state.returnSeriesFromAPI.network}
												</span>
											</p>
										</div>
										<div className="info">
											<p>
												<i className="lnr lnr-star" />
												<span> <strong>Category:</strong> {categs}</span>
											</p>
										</div>
										<div className="info">
											<p>
												<i className="lnr lnr-calendar-full" />
												<span>
													<strong>First airtime:</strong> {this.state.returnSeriesFromAPI.creation}
												</span>
											</p>
										</div>
										<div className="info">
											<p>
												<i className="lnr lnr-map" />
												<span>
													<strong>Status:</strong> {this.state.returnSeriesFromAPI.status}
												</span>
											</p>
										</div>
									</div>
									<div className="info-buttons">
											<a href={urlstreaming} target="_blank" className="btn btn-primary-filled">
												<i className="lnr lnr-eye" />
												<span> Watch Now</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
			</section>
		</div>
		);
	}
}

function mapStateToProps(state) {
	return { selectedSerie: state.selectedSerie};
}

var SerieSingleRedux = connect(mapStateToProps, null)(SerieSingle);

export default SerieSingleRedux;

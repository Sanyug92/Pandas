import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Carousels extends React.Component {

	generatePussPics = () => {
		const sanyusPuss = [
			"https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350",
			"http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
			"http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg",
			"https://peopledotcom.files.wordpress.com/2017/12/smush-the-cat-1.jpg"
		]

		sanyusPuss.map((puss) => {
			return (
				<img src={puss} />
				)
		});

	}
	render() {
		return (
			<Carousel>
				<div>
					<img width={900} height={600} alt="900x500" src="https://static1.squarespace.com/static/56840d31df40f3c7b7ae0d54/t/569f8c209cadb6ef04a07bed/1453296673378/Lausanne+-+1400x600.jpg?format=1500w" />	
				</div>
				<div>
					<img width={900} height={600} alt="900x500" src="http://istandist.com/wp-content/uploads/2017/02/QT_MELB_SH25_961-copy-1400x600.jpg" />
				</div>
				<div>
					<img width={900} height={600} alt="900x500" src="https://parmigiani.gr/wp-content/uploads/2014/07/1400X600.jpg" />
				</div>
			</Carousel>

		)
	}
}

export default Carousels;
import React from 'react';
import { Link } from 'gatsby'

const studioTable = (props) => {
	console.log(props)
	return (
		<div className="studio-section">
			<div className="container">
				{props.sectionDetail.blockItems.map((table, key) => (
					<div key={key} className="studio-box table-box" data-aos="fade-in" data-aos-duration="2000">
						<figure>
							<ul className="points">
								<li>Square <br />Footage</li>
								<li>Amps of power</li>
								<li>Cyc wall</li>
								<li>Sound<br /> Dampened</li>
								<li>Lighting Grid</li>
								<li>Kitchenette</li>
							</ul>
							<table>

								<tbody>
									<tr>
										<td>Square <br />Footage</td>
										<td>XXXX sq ft</td>
										<td>XXXX sq ft</td>
										<td>XXXX sq ft</td>
										<td>XXXX sq ft</td>
									</tr>
									<tr>
										<td>Amps of power</td>
										<td>XX</td>
										<td>XX</td>
										<td>XX</td>
										<td>XX</td>
									</tr>
									<tr>
										<td>Cyc wall</td>
										<td><span></span></td>
										<td><span></span></td>
										<td><span></span></td>
										<td><span></span></td>
									</tr>
									<tr>
										<td>Sound<br /> Dampened</td>
										<td><span></span></td>
										<td><span></span></td>
										<td><span></span></td>
										<td><span></span></td>
									</tr>
									<tr>
										<td>Lighting Grid</td>
										<td><span></span></td>
										<td><span></span></td>
										<td><span></span></td>
										<td><span></span></td>
									</tr>
									<tr>
										<td>Kitchenette</td>
										<td><span></span></td>
										<td><span></span></td>
										<td><span></span></td>
										<td><span></span></td>
									</tr>
								</tbody>
							</table>
						</figure>
						<h2>{table.title}</h2>

					</div>
				))}


			</div>
		</div>
	)

}

export default studioTable

import React from 'react';
import { Link } from 'gatsby'

const studiosSection = (props) => {
	console.log(props)
	return (
		<div className="studio-section">
			<div className="container">
				{props.sectionDetail.blockItems.map((item, key) => (
					<div key={key} className="studio-box" data-aos="fade-in" data-aos-duration="2000">
						<figure>
							<img src={item.images[0].file.url} />
						</figure>
						<h2>{item.title}</h2>
						<div className="text-box">
							<div dangerouslySetInnerHTML={{
								__html: item.description.childMarkdownRemark.html
							}}></div>

						</div>
						<ul>
							<li><Link to={item.url} className="btn-underline">learn more</Link></li>
							<li><Link to={item.bookUrl} className="btn-underline">book now</Link></li>
						</ul>
					</div>
				))}
				<div className="studio-box table-box" data-aos="fade-in" data-aos-duration="2000">
					<figure>
						<table>
							<thead>
								<tr>
									<th></th>
									<th>Studio 1</th>
									<th>Studio 2</th>
									<th>Studio 3</th>
									<th>Studio 4</th>
								</tr>
							</thead>
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
					<h2>studios</h2>

				</div>

			</div>
		</div>
	)

}

export default studiosSection

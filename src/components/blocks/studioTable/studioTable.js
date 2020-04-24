import React from 'react';
import { Link } from 'gatsby'

const studioTable = (props) => {
	console.log(props)
	return (
		<div className="studio-section">
			{/* <div className="container">
				{props.sectionDetail.blockItems.map((table, key) => (
					<div key={key} className="studio-box custom-layout" data-aos="fade-in" data-aos-duration="2000">
						<figure>
							<ul className="points">
								<li></li>
								<li>Square <br />Footage</li>
								<li>Amps of power</li>
								<li>Cyc wall</li>
								<li>Sound<br /> Dampened</li>
								<li>Lighting Grid</li>
								<li>Kitchenette</li>
							</ul>
							<div className="table-layout">
								{table.tableBody.map((item, key) => (
									<ul key={key}>
										<li>{item.title}</li>
										<li>{item.squareFootage ? item.squareFootage : '-'}</li>
										<li>{item.ampsOfPower ? item.ampsOfPower : '-'}</li>
										<li>{item.cycWall ? <span className="active"></span> : <span></span>}</li>
										<li>{item.soundDampened ? <span className="active"></span> : <span></span>}</li>
										<li>{item.lightingGrid ? <span className="active"></span> : <span></span>}</li>
										<li>{item.kitchenette ? <span className="active"></span> : <span></span>}</li>
									</ul>
								))}

							</div>
						</figure>
						<h2>{table.title}</h2>

					</div>
				))}


			</div> */}
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

							<table >
								<thead>
									<tr>
										{table.tableBody.map((item, key) => (
											<th key={key}>{item.title}</th>
										))}
									</tr>
								</thead>
								<tbody>
									<tr>
										{table.tableBody.map((item, key) => (
											<td key={key}>{item.squareFootage ? item.squareFootage : '-'}</td>
										))}
									</tr>
									<tr>
										{table.tableBody.map((item, key) => (
											<td key={key}>{item.ampsOfPower ? item.ampsOfPower : '-'}</td>
										))}
									</tr>
									<tr>
										{table.tableBody.map((item, key) => (
											<td key={key}>{item.cycWall ? <span className="active"></span> : <span></span>}</td>
										))}
									</tr>
									<tr>
										{table.tableBody.map((item, key) => (
											<td key={key}>{item.soundDampened ? <span className="active"></span> : <span></span>}</td>
										))}
									</tr>
									<tr>
										{table.tableBody.map((item, key) => (
											<td key={key}>{item.lightingGrid ? <span className="active"></span> : <span></span>}</td>
										))}
									</tr>
									<tr>
										{table.tableBody.map((item, key) => (
											<td key={key}>{item.kitchenette ? <span className="active"></span> : <span></span>}</td>
										))}
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

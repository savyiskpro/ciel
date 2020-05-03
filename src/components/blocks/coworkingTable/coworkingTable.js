import React from 'react';
import { Link } from 'gatsby'

const coworkingTable = (props) => {
	return (
		<div className="studio-section">

			<div className="container">
				{props.sectionDetail.blockItems.map((table, key) => (
					<div key={key} className="studio-box table-box" data-aos="fade-in" data-aos-duration="2000">
						<figure>
							<ul className="points">
								<li>Natural Light</li>
								<li>Private Phone Booth</li>
								<li>WiFi, Printing & IT Support</li>
								<li>Artisan Roasted Coffee</li>
								<li>Fully Stocked Kitchenette</li>
								<li>Creative Suites</li>
								<li>Mail Services</li>
								<li>In-House Production Services</li>
								<li>Happy Hour & Cocktail Program</li>
								<li>VIP Access to Cultural Events</li>
								<li>Discounted use of first floor studio/event spaces (as available)</li>
							</ul>

							<table>
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
											<td key={key}>{item.naturalLight ? <span className="active"></span> : <span></span>}</td>
										))}
									</tr>
									<tr>
										{table.tableBody.map((item, key) => (
											<td key={key}>{item.privatePhoneBooth ? <span className="active"></span> : <span></span>}</td>
										))}
									</tr>
									<tr>
										{table.tableBody.map((item, key) => (
											<td key={key}>{item.wiFiPrintingItSupport ? <span className="active"></span> : <span></span>}</td>
										))}
									</tr>
									<tr>
										{table.tableBody.map((item, key) => (
											<td key={key}>{item.artisanRoastedCoffee ? <span className="active"></span> : <span></span>}</td>
										))}
									</tr>
									<tr>
										{table.tableBody.map((item, key) => (
											<td key={key}>{item.fullyStockedKitchenette ? <span className="active"></span> : <span></span>}</td>
										))}
									</tr>
									<tr>
										{table.tableBody.map((item, key) => (
											<td key={key}>{item.creativeSuites ? <span className="active"></span> : <span></span>}</td>
										))}
									</tr>
									<tr>
										{table.tableBody.map((item, key) => (
											<td key={key}>{item.mailServices ? <span className="active"></span> : <span></span>}</td>
										))}
									</tr>
									<tr>
										{table.tableBody.map((item, key) => (
											<td key={key}>{item.inHouseProductionServices ? <span className="active"></span> : <span></span>}</td>
										))}
									</tr>
									<tr>
										{table.tableBody.map((item, key) => (
											<td key={key}>{item.happyHourCocktailProgram ? <span className="active"></span> : <span></span>}</td>
										))}
									</tr>
									<tr>
										{table.tableBody.map((item, key) => (
											<td key={key}>{item.vipAccessToCulturalEvents ? <span className="active"></span> : <span></span>}</td>
										))}
									</tr>
									<tr>
										{table.tableBody.map((item, key) => (
											<td key={key}>{item.discountedUseOfFirstFloorStudioeventSpaces ? <span className="active"></span> : <span></span>}</td>
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

export default coworkingTable

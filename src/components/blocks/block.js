import React from 'react';
import Renderer from '../renderer';
import TabSection from './tabSection/tabSection';
import TextBgSection from './textBgSection/textBgSection';
import PardonSeciton from './pardonSeciton/pardonSeciton';
import JoinSection from './joinSection/joinSection';
import SliderSection from './sliderSection/sliderSection';
import CommunitySection from './communitySection/communitySection';
import FounderSection from './founderSection/founderSection';
import TeamSection from './teamSection/teamSection';
import AboutVideoSection from './aboutVideoSection/aboutVideoSection';
import PartnerSection from './partnerSection/partnerSection';
import HappeningSection from './happeningSection/happeningSection';
import BackgroundImageSection from './backgroundImageSection/backgroundImageSection';
import ArtistSection from './artistSection/artistSection';
import BookSection from './bookSection/bookSection';
import CielSection from './cielSection/cielSection';
import StudiosSection from './studiosSection/studiosSection';
import CoworkingSection from './coworkingSection/coworkingSection';
import StudioTable from './studioTable/studioTable';
import CoworkingTable from './coworkingTable/coworkingTable'


const block = (props) => {
	let blockContent = "";
	switch (props.sectionDetail.blockClass) {
		case 'page-content':
			return blockContent = <div className="page-content">
				<div className="container">
					<Renderer views={props.sectionDetail.blockItems} />
				</div>
			</div>
		case 'tab-section':
			blockContent = <TabSection sectionDetail={props.sectionDetail} />
			return blockContent;
		case 'text-bg-section':
			blockContent = <TextBgSection sectionDetail={props.sectionDetail} />
			return blockContent
		case 'pardon-seciton':
			blockContent = <PardonSeciton sectionDetail={props.sectionDetail} />;
			return blockContent
		case 'join-section':
			blockContent = <JoinSection sectionDetail={props.sectionDetail} />
			return blockContent;
		case 'event-section':
			blockContent = <SliderSection sectionDetail={props.sectionDetail} />
			return blockContent;
		case 'community-section':
			blockContent = <CommunitySection sectionDetail={props.sectionDetail} />
			return blockContent;
		case 'founder-detail':
			blockContent = <FounderSection sectionDetail={props.sectionDetail} />
			return blockContent;
		case 'team-section':
			blockContent = <TeamSection sectionDetail={props.sectionDetail} />
			return blockContent;
		case 'about-video':
			blockContent = <AboutVideoSection sectionDetail={props.sectionDetail} />;
			return blockContent;
		case 'partner-section':
			blockContent = <PartnerSection sectionDetail={props.sectionDetail} />;
			return blockContent;
		case 'happenings-section':
			blockContent = <HappeningSection sectionDetail={props.sectionDetail} />;
			return blockContent;
		case 'background-image-seciton':
			blockContent = <BackgroundImageSection sectionDetail={props.sectionDetail} />
			return blockContent;
		case 'artist-section':
			blockContent = <ArtistSection sectionDetail={props.sectionDetail} />
			return blockContent;
		case 'book-section':
			blockContent = <BookSection sectionDetail={props.sectionDetail} />
			return blockContent;
		case 'ciel-section':
			blockContent = <CielSection sectionDetail={props.sectionDetail} />
			return blockContent;
		case 'studio-section':
			blockContent = <StudiosSection sectionDetail={props.sectionDetail} />
			return blockContent;
		case 'coworking-section':
			blockContent = <CoworkingSection sectionDetail={props.sectionDetail} />
			return blockContent;
		case 'studio-table':
			blockContent = <StudioTable sectionDetail={props.sectionDetail} />
			return blockContent;
		case 'coworking-table':
			blockContent = <CoworkingTable sectionDetail={props.sectionDetail} />
			return blockContent

	}

	return blockContent
}


export default block

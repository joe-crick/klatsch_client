import React from 'react';

const ProfileHeaderSummary = props => {
	return (
		<div className="klatsch-profile-header-summary">
			<div className="profile-thumb">
				<img data-src="#" className="" data-albumid="0" data-index="0"/>
			</div>
			<div className="profile-basics">
				<div className="profile-basics-username">Monkey Chunk
					<button className="profile-basics-username-online"
							data-tooltip="Last online Today - 8:49am" data-tooltip-ontap="">
						<div className="profile-basics-username-online-icon "></div>
					</button>
				</div>
				<div className="profile-basics-asl"><span
					className="profile-basics-asl-age">37</span>
					<span className="profile-basics-asl-spacer">•</span> <span
						className="profile-basics-asl-location">Seattle, WA</span> <span
						className="profile-basics-asl-spacer">•</span> <span
						className="profile-basics-asl-match"> <a
						href="/profile/CallSign_Charlie/questions"> 90% Match </a> </span></div>
			</div>
		</div>
	);
};

ProfileHeaderSummary.propTypes = {};

export default ProfileHeaderSummary;
import React from 'react';
import ProfileHeaderSummary from './profile-header-summary/profile-header-summary';

const ProfileHeader = props => {
	return (
		<div className="klatsch-profile-header container">
			<div className="row">
				<div className="col-lg-9">
					<ProfileHeaderSummary/>
				</div>
				<div className="klatsch-profile-header-actions col-lg-3">
					<button className="actions2015-chat flatbutton blue " data-chat=""> Message</button>
					<button name="like" id="profile2015-like-2081638567312912310" data-tuid="2081638567312912310"
							data-source="desktop - profile 2015"
							className="binary_rating_button flatbutton silver actions2015-like like"><i
						className="icon i-star"></i> <span className="rating_like">Like</span> <span
						className="rating_liked">Liked</span>
					</button>
					<button className="actions2015-more"><i className="okicon i-ellipsis-h"></i></button>
					<div className="actions2015-blocked">
						<div className="actions2015-blocked-desc"> They’ve been blocked.</div>
						<button className="actions2015-blocked-unblock flatbutton silver" data-flag=""> Report
						</button>
						<button className="actions2015-blocked-unblock flatbutton silver"
								data-profile-action="unblock"
								data-tuid="2081638567312912310"> Unblock
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

ProfileHeader.propTypes = {};

export default ProfileHeader;
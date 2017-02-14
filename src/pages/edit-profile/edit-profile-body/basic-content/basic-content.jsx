import React from 'react';
import {WithContext as ReactTags} from 'react-tag-input';
import TextEditor from '../../../../components/html-text-editor/html-text-editor';

const tags = [];
const bogusFunction = bogus => bogus;

const BasicContent = props => {
	return (
		<div className="klatsch-edit-profile-basic-content container">
			<h4 className="basic-content-header">Basic Content</h4>
			<form className="basic-content-form">
				<div className="form-group">
					<div className="row">
						<div className="col-lg-5">
							<label htmlFor="email">Email address</label>
							<input type="email" className="form-control" id="email" aria-describedby="emailHelp"
								   placeholder="Enter email" autoFocus/>
							<small id="emailHelp" className="form-text text-muted">
								We'll never share your email with anyone else.
							</small>
						</div>
						<div className="col-lg-5">
							<label htmlFor="password">Password</label>
							<input type="password" className="form-control" id="password" placeholder="Password"/>
						</div>
					</div>
				</div>
				<div className="form-group">
					<label>Bio</label>
					<TextEditor/>
				</div>
				<div className="form-group">
					<label>Family </label>
					<ReactTags tags={tags}
							   handleDelete={bogusFunction}
							   handleAddition={bogusFunction}
							   handleDrag={bogusFunction}/>
				</div>
				<div className="form-group">
					<label>Interests</label>
					<ReactTags tags={tags}
							   handleDelete={bogusFunction}
							   handleAddition={bogusFunction}
							   handleDrag={bogusFunction}/>
				</div>
			</form>
		</div>
	);
};

BasicContent.propTypes = {};

export default BasicContent;
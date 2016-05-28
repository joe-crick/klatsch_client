export default function loginBarView() {
    return (
        <klatch-sign-up-bar className="container">
            <form>
                <div className="row login-container">
                    <div className="col-md-4">
                        <fieldset className="form-group">
                            <label htmlFor="zip-code">ZipCode</label>
                                <input
                                    id="zip-code"
                                    className="form-control"
                                    placeholder={this.state.i18n.zipPlaceHolder}
                                    value={this.state.zipCode}
                                    onChange={event => this.setState({zipCode: event.target.value})}/>
                        </fieldset>
                    </div>
                    <div className="col-md-4">
                        <fieldset className="form-group">
                            <label htmlFor="age-range">Age Range</label>
                            <select
                                id="age-range"
                                value={this.state.ageRange}
                                onChange={event => this.setState({ageRange: event.target.value})}
                                className="form-control">
                                <option value="0">{this.state.ageRangeLabels.baby}</option>
                                <option value="1">{this.state.ageRangeLabels.toddler}</option>
                                <option value="2">{this.state.ageRangeLabels.threeToFive}</option>
                                <option value="3">{this.state.ageRangeLabels.fiveToSeven}</option>
                                <option value="4">{this.state.ageRangeLabels.sevenToTen}</option>
                                <option value="5">{this.state.ageRangeLabels.preTeen}</option>
                            </select>
                        </fieldset>
                    </div>
                    <div className="col-md-4">
                        <button type="button" className="btn btn-primary continue-button">Continue</button>
                    </div>
                </div>
            </form>
        </klatch-sign-up-bar>
    );
}

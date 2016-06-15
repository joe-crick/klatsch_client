import './sign-up-bar.sass';
import createMultiSelect from '../../../components/multi-select/multi-select';

export default React => (props) => {
    let MultiSelect = createMultiSelect(React);
    let store = props.store;
    return (
        <klatsch-basic-search-bar className="container">
            <form>
                <div className="row login-container">
                    <div className="col-md-4">
                        <fieldset className="form-group">
                            <label htmlFor="zip-code">{store.zipCodeText}</label>
                            <input id="zip-code" className="form-control"
                              placeholder={store.zipCodeText} value={store.zipCodeTextValue}/>
                        </fieldset>
                    </div>
                    <div className="col-md-4">
                        <fieldset className="form-group">
                            <label>{store.ageRangeLabel}</label>
                            <MultiSelect store={store} selectTitle={store.selectTitle}/>
                        </fieldset>
                    </div>
                    <div className="col-md-4">
                        <button type="button" className="btn btn-primary continue-button" onClick={store.register}>Continue</button>
                    </div>
                </div>
            </form>
        </klatsch-basic-search-bar>
    );
};

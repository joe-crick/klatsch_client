import './multi-select.sass';
import {observer} from 'mobx-react';

export default React => observer((props) => {
    let store = props.store;
    return (
        <klatsch-multi-select>
              <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-secondary dropdown-toggle"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={event => store.toggleDropDown(event.target)}>
                      {props.selectTitle}
                  </button>
                  <div className="dropdown-menu">
                      {store.ageRanges.map(function(option) {
                          return (
                              <button className='dropdown-item' type="button"
                                key={option.value}
                                onClick={event => store.dropDownAction(option)}>
                                <span className={option.selected ? 'fa fa-check-square' : ''}></span>
                                <span className={option.selected ? 'selected' : 'unselected'}>{option.label}</span>
                              </button>
                          );
                      })}
                  </div>
              </div>
        </klatsch-multi-select>
    );
});

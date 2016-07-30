import {observer} from 'mobx-react';
import {toggleDropDown} from '../../utils/componentEvents';

export default React => observer((props) => {
    return (
        <klatsch-multi-select>
              <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-secondary dropdown-toggle"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={event => toggleDropDown(event.target)}>
                      {props.selectTitle}
                  </button>
                  <div className="dropdown-menu">
                      {props.options.map(function(option) {
                          return (
                              <button className='dropdown-item' type="button"
                                key={option.value}
                                onClick={event => props.dropDownAction(option)}>
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

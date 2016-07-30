import {observer} from 'mobx-react';
import UserStore from '../../stores/user-store';
import createMultiSelect from '../../components/multi-select/multi-select';

export default React => observer((props) => {
 let MultiSelect = createMultiSelect(React);

 return (
   <klatsch-user-data>
     <form>
       <fieldset className="form-group">
         <label htmlFor="user-name">{UserStore.userNameLabel}</label>
           <input id="user-name" className="form-control" type="text"></input>
       </fieldset>
       <fieldset className="form-group">
           <label>{UserStore.genderLabel}
             <MultiSelect options={UserStore.genderOptions} dropDownAction={UserStore.dropDownAction} selectTitle={UserStore.genderSelectLabel}/>
           </label>
       </fieldset>
       <fieldset className="form-group">
         <label htmlFor="age">{UserStore.ageLabel}</label>
           <input id="age" className="form-control" type="number"></input>
       </fieldset>
       <fieldset className="form-group">
         <label htmlFor="zip">{UserStore.zipCodeText}</label>
           <input id="zip" className="form-control" type="text"></input>
       </fieldset>
     </form>
   </klatsch-user-data>
 );

});

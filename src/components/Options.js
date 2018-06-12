import React from 'react';
import Option from './Option';

const Options = (props) => (// added our modifier to Remove all button
    <div>
        <div className="widget-header">
          <h3 className="widget-header__title">Your Options</h3>
        <button 
          className="button button--link"
          onClick={props.handleDeleteOptions}
        >
          Remove All
        </button>
        </div>
        
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
        {
            props.options.map((option, index) => (// were using handleDeleteOption singular..this is for a button (above) that deletes individual options from our array
                <Option
                    key={option}
                    optionText={option}
                    count={index + 1} // increment the index by one each time
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
    </div>
);

export default Options; 
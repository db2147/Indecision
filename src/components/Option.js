import React from 'react';

const Option = (props) => (// removing the return and using the return provided implicitly to us in our stateless function
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            remove
            </button>
    </div>
);

export default Option;
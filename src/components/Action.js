import React from 'react';

const Action = (props) => (// removing the render method and using the render method implicit to our stateless function
    <div>
        <button
            className="big-button"
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
            What should I do?
      </button>
    </div>
);

export default Action;
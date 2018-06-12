let guitar = false;

const toggleGuitar = () => {
    guitar = !guitar;
    render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Guitar Toggle</h1>

      <button onClick={toggleGuitar}>
        {guitar ? 'Hide guitar' : 'Show guitar'}
      </button>
      {guitar && (
        <div>
          <p>Hey. Time to play guitar now!</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
};

render();
import React from 'react';

const HomePage = (props) => {

    return ( <div className="list-group">
    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Bonjour a toi</h5>
        <small>Test</small>
      </div>
      <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
      <small>Donec id elit non mi porta.</small>
    </a>
    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Bonsoir a toi</h5>
        <small className="text-muted">Test</small>
      </div>
      <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
      <small className="text-muted">Donec id elit non mi porta.</small>
    </a>
  </div> );
}
 
export default HomePage;
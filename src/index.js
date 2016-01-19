import './foo';
import 'bootstrap/dist/css/bootstrap.css';
import 'octicons/octicons/octicons.css';
import './base.css';
import React from 'react';
import { render } from 'react-dom';

render(
  <div className="alert alert-success">
    <strong>{'Success!'}</strong> {'Hello from React!'}
  </div>,
  document.getElementById('react')
);

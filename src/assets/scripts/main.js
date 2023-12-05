/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import * as bootstrap from 'bootstrap';

/**
 * Write any other JavaScript below
 */

+( function() {
  const url = window.location.href;
  const page = url.substring(url.lastIndexOf('/') + 1);
  const nav = document.querySelector(`[href="${page}"]`);
  nav.classList.add('active');
} )();

// add setups for jest here for example global mocks
// window.matchMedia mock
import 'react-app-polyfill/stable';

window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };
});

window.env = windowEnvMock;

// mutation observer polyfill
require('mutationobserver-shim');
global.MutationObserver = global.window.MutationObserver;

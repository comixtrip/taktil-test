import taktil from 'taktil';

import { controls } from './controls';
import { views } from './views';

// 1. set bitwig api version
host.loadAPI(6);

// 2. define controller script
host.defineController(
    'toadtec', // vendor
    'UH18 OSC2Midi Controller', // name
    '1.0.0', // version
    '5d0fca60-44b7-11e8-a088-85a8c0142b99', // uuid
    'adrian' // author
);

// 3. setup and discover midi controllers
host.defineMidiPorts(1, 1); // number of midi inputs, outputs
// host.addDeviceNameBasedDiscoveryPair(['Input Name'], ['Output Name']);

// 4. register controls to the session
taktil.registerControls(controls);

// 5. register views to the session
taktil.registerViews(views);

// 6. on init, activate view to trigger initial render
taktil.on('init', () => taktil.activateView('BASE'));

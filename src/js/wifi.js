import * as network from './agl_stubs_network';
import Mustache from 'mustache';
import { load as load_template } from './templates';
import * as app from './app';

var template;
var page = {
    devices: []
}

function render(){
    document.body.innerHTML = Mustache.render(template, page);
}

function update_devices(devices) {
    page.devices = [];
    devices.forEach(function(device) {
        if( device.properties.type === 'wifi' ) {
            page.devices.push(device);
        }
    });

    console.log(page);

    render();
}

function refresh_devices() {
    network.services().then(function(result) {
        update_devices(result.values);
    });
}

export function init() {
    load_template('wifi.template.html').then(function(result) {
        template = result;
        Mustache.parse(template);
    }, function(error) {
        console.error('ERROR Loading wifi template', error);
    });
}

export function show() {
    refresh_devices();
}

export function hide() {
    app.show();
}
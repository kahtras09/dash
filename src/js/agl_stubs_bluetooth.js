export function managed_objects() {
    return new Promise((resolve, reject) => {
        resolve({
            devices: []
        })
    });
}


let _powered = false

export function adapter_state(new_state) {
    return new Promise((resolve, reject) => {
        if (typeof new_state !== undefined)
           _powered = new_state.powered;
        resolve({
            powered: _powered 
        });
    });
}

export function pair() {
}

export function connect() {
}

export function disconnect() {
}
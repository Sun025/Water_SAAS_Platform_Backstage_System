export interface DeviceInfo {
    mac: string,
    state: StateList,
    name: string,
    address: string
}

enum StateList {
    '正常',
    '检修'
}
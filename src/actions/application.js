import Constant from "../constants";

// Called after connectivity change to store in application state
export const onNetStateChanged = state => {
    return {
        type: Constant.NET_STATE_CHANGED,
        payload: state
    };
};

// Realm initialized in componentWillMount of AppContainer
export const onRealmDBInititialize = realm => {
    return {
        type: Constant.REALM_INITIALIZE,
        payload: realm
    };
};
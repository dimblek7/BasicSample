import { createReducer } from "../util";
import Constant from "../constants";
//constants
const initialState = {
    realm: null,
    netState: false,
    
};

export default createReducer(initialState, {
    [Constant.REALM_INITIALIZE]: (state, payload) => {
        return Object.assign({}, state, {
            realm: payload
        });
    },
    [Constant.NET_STATE_CHANGED]: (state, payload) => {
        return Object.assign({}, state, {
            netState: payload,
            hideNews: payload ? false : state.hideNews
        });
    }
    
});

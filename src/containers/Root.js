import React from "react";
import getStore from "./../store/configureStore";
import {Provider} from "react-redux";
import App from '../containers/App';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const store = getStore();
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

export default Root;
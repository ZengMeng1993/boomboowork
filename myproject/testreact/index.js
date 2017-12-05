import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';
import App from './src/Application';
export default class testreact extends Component {
    render() {
        return (
            <App/>
        );
    }
}
AppRegistry.registerComponent('testreact', () => App);

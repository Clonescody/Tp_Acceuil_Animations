import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {StackNavigator} from 'react-navigation';


class MainView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tapped: false
        }
    }

    static navigationOptions = {
        title: 'Première vue',
    };

    render() {
        console.log("render1");
        return (
            <View style={styles.container}>
                <View style={styles.row}>

                    <TouchableOpacity onPress={() => this.setState({tapped: !this.state.fontSize })}
                                      style={styles.animated}>
                        <Animatable.View
                            style={styles.button}
                            animation={this.state.tapped ? 'bounceOutLeft' : 'bounceInLeft'}
                            onAnimationEnd={this.state.tapped ? () => {this.props.navigation.navigate('Test');} : () => {} }>
                            <TouchableOpacity onPress={() => this.setState({tapped: !this.state.tapped})}>
                                <Text>Seconde vue</Text>
                            </TouchableOpacity>
                        </Animatable.View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({tapped: !this.state.fontSize })}
                                      style={styles.animated}>
                        <Animatable.View
                            style={styles.button}
                            animation={this.state.tapped ? 'bounceOutRight' : 'bounceInRight'}
                            onAnimationEnd={this.state.tapped ? () => {} : () => {} }>
                            <TouchableOpacity onPress={() => this.setState({tapped: !this.state.tapped})}>
                                <Text>Boutton vide</Text>
                            </TouchableOpacity>
                        </Animatable.View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>

                    <TouchableOpacity onPress={() => this.setState({tapped: !this.state.fontSize })}
                                      style={styles.animated}>
                        <Animatable.View
                            style={styles.button}
                            animation={this.state.tapped ? 'bounceOutLeft' : 'bounceInLeft'}
                            onAnimationEnd={this.state.tapped ? () => {} : () => {} }>
                            <TouchableOpacity onPress={() => this.setState({tapped: !this.state.tapped})}>
                                <Text>Boutton vide</Text>
                            </TouchableOpacity>
                        </Animatable.View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({tapped: !this.state.fontSize })}
                                      style={styles.animated}>
                        <Animatable.View
                            style={styles.button}
                            animation={this.state.tapped ? 'bounceOutRight' : 'bounceInRight'}
                            onAnimationEnd={this.state.tapped ? () => {} : () => {} }>
                            <TouchableOpacity onPress={() => this.setState({tapped: !this.state.tapped})}>
                                <Text>Boutton vide</Text>
                            </TouchableOpacity>
                        </Animatable.View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

class TestView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tapped: false
        }
    }

    static navigationOptions = {
        title: 'Seconde vue',
    };

    _switchView() {
        console.log("switch2");
        this.setState({tapped: false});
        this.props.navigation.navigate('Main');
    }

    render() {
        console.log("render2");
        return (
            <TouchableOpacity onPress={() => this.setState({tapped: !this.state.fontSize })}
                              style={styles.animated}>
                <Animatable.View
                    style={styles.button}
                    animation={this.state.tapped ? 'fadeOutDownBig' : 'fadeInDownBig'}
                    onAnimationEnd={this.state.tapped ? () => {this.props.navigation.navigate('Main');} : () => {} }>
                    <TouchableOpacity onPress={() => this.setState({tapped: !this.state.tapped})}>
                        <Text>Première vue</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        padding: 15
    },
    animated: {
        width: 160,
        height: 180
    },
    button: {
        width: 160,
        height: 180,
        borderWidth: 1,
        borderColor: '#000000'
    }
});

const App = StackNavigator({
    Main: {screen: MainView},
    Test: {screen: TestView},
});


AppRegistry.registerComponent('TpAnimatable4_4_2', () => App);

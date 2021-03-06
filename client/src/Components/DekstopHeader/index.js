
import React, { Component } from 'react';
import {
    Button,
    Container,
    Menu,
    Segment,
    Visibility,
    Image,
    Popup
} from 'semantic-ui-react';
import Login from '../Login';
import HelpDropdown from "../HelpDropdown";
import ProductsDropdown from '../ProductsDropdown';
import { Link } from 'react-router-dom';
import logo from '../../public/images/dzvun-logo.jpg';
import './index.css';


const fetch = require('../../helpers/fetch');
const get = fetch.get;



class DesktopHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            authenticating: props.authenticating
        };
    }

    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });

    handleSignOut = async () => {
        await get('/signout');
        window.location.reload();
    }

    

    render() {
        const fixed  = this.state.fixed;
        const authenticating = this.state.authenticating;
        const user = this.state.user;
        if(authenticating) {
            return (
                <Visibility
                once={false}
                onBottomPassed={this.showFixedMenu}
                onBottomPassedReverse={this.hideFixedMenu}
                className="dekstop-header"
            >

                <Segment
                    inverted
                    textAlign='center'
                    vertical
                    className="dekstopheader"
                >
                    <Menu
                        fixed={fixed ? 'top' : null}
                        inverted={!fixed}
                        pointing={!fixed}
                        secondary={!fixed}
                        size='large'
                        className="dekstopheader-menu"
                        style={{ padding: '0em 0em' }}
                    >
                        <Container>
                            <Menu.Item as={Link} to='/' style={{ padding: '0em 0em' }}  >
                                <Image src={logo} className='logo-image' />
                            </Menu.Item>
                        </Container>
                    </Menu>
                </Segment>
            </Visibility>
            )
        } else  {
            if(user) {
                return (
                <Visibility
                once={false}
                onBottomPassed={this.showFixedMenu}
                onBottomPassedReverse={this.hideFixedMenu}
                className="dekstop-header"
            >

                <Segment
                    inverted
                    textAlign='center'
                    vertical
                    className="dekstopheader"
                >
                    <Menu
                        fixed={fixed ? 'top' : null}
                        inverted={!fixed}
                        pointing={!fixed}
                        secondary={!fixed}
                        size='large'
                        className="dekstopheader-menu"
                        style={{ padding: '0em 0em' }}
                    >
                        <Container>
                            <Menu.Item as={Link} to='/' style={{ padding: '0em 0em' }}  >
                                <Image src={logo} className='logo-image' />
                            </Menu.Item>
                            <Menu.Item position="right">
                               
                                <Button onClick = {this.handleSignOut} inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }} className="dekstopheader-button" color="blue">
                                    Sign Out
                                </Button>
                            </Menu.Item>
                        </Container>
                    </Menu>
                </Segment>
            </Visibility>
                )
            }  else  {
                return (
                    <Visibility
                        once={false}
                        onBottomPassed={this.showFixedMenu}
                        onBottomPassedReverse={this.hideFixedMenu}
                        className="dekstop-header"
                    >
        
                        <Segment
                            inverted
                            textAlign='center'
                            vertical
                            className="dekstopheader"
                        >
                            <Menu
                                fixed={fixed ? 'top' : null}
                                inverted={!fixed}
                                pointing={!fixed}
                                secondary={!fixed}
                                size='large'
                                className="dekstopheader-menu"
                                style={{ padding: '0em 0em' }}
                            >
                                <Container>
                                    <Menu.Item as={Link} to='/' style={{ padding: '0em 0em' }}  >
                                        <Image src={logo} className='logo-image' />
                                    </Menu.Item>
                                    <Menu.Item position="right">
                                        <Popup
                                            trigger={
                                                <Button className="dekstopheader-menu-button">All Products</Button>
                                            }
                                            content={
                                                <ProductsDropdown className="all-products-popup"/>
                                            }
                                            position="bottom center"
                                            basic
                                            on="click"
                                        />
        
                                        <Button className="dekstopheader-menu-button">Plans</Button>
                                        <Popup
                                            position="bottom left"
                                            trigger={
                                                <Button className="dekstopheader-menu-button">Help</Button>
                                            }
                                            content={
                                                <HelpDropdown/>
                                            }
                                            basic
                                            on="click"
                                        />
                                    </Menu.Item>
                                    <Menu.Item position='right' style={{ padding: '1em 0em' }}>
                                        <Popup
                                            trigger={
                                                <Button inverted={!fixed} className="dekstopheader-button" color="blue">
                                                    Log in
                                            </Button>
                                            }
                                            content={
                                                <Login />
                                            }
                                            basic
                                            on="click"
                                        />
                                        <Button as={Link} to='/signup' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }} className="dekstopheader-button" color="blue">
                                            Sign Up
                                            </Button>
                                    </Menu.Item>
                                </Container>
                            </Menu>
                        </Segment>
                    </Visibility>
                )
            }
        }
    }
}

export default DesktopHeader;
import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';

import NavMenu from './NavMenu';
import {getMenuByLocation} from '../../actions/navMenuActions';

class PageHeader extends Component {
    componentWillMount(){
        this.props.getMenuByLocation('primary');
    }
    render() {
        console.log('pageHeaderComponent render', this.props.main_menu);
        return (
            <header>
                <div className="container">
                    <NavMenu links = {this.props.main_menu}/>
                </div>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        main_menu: state.navMenuReducer.main_menu
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMenuByLocation: (location) => dispatch(getMenuByLocation(location))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageHeader);

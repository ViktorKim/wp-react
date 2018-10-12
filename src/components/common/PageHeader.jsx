import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';

import NavMenu from './NavMenu';
import {getMenuByLocation} from '../../actions/navMenuActions';

class PageHeader extends Component {
    /**
     * React lifecycle function
     */
    componentWillMount(){
        this.props.getMenuByLocation('primary');
    }

    /**
     * OnClick handler for menu hamburger btn
     */
    openMenuBtnHandler = () => {
        this.toggleClassBySelector('.header .main-menu', 'active');
    };

    /**
     * Toggle class function
     * TODO: Create common file and import if count of such functions will increase
     *
     * @param _selector
     * @param _class
     *
     * @return void
     */
    toggleClassBySelector = (_selector, _class) => {
        const _elem = document.querySelector(_selector);
        if (_elem.classList.contains(_class)){
            _elem.classList.remove(_class);
        } else {
            _elem.classList.add(_class);
        }
    };

    /**
     * React render function
     * @return {*}
     */
    render() {
        console.log('pageHeaderComponent render', this.props.main_menu);
        return (
            <header className="header">
                <div className="container">
                    <div className="header__navbar">
                        <div className="logo">Logo</div>
                        <NavMenu links = {this.props.main_menu}/>
                        <button className="btn menu-toggle" onClick={this.openMenuBtnHandler} />
                    </div>
                </div>
            </header>
        )
    }
}

/**
 * Returns redux states object
 *
 * @param state
 * @return {{main_menu: (INITIAL_STATE.main_menu|{}|main_menu)}}
 */
const mapStateToProps = (state) => {
    return {
        main_menu: state.navMenuReducer.main_menu
    }
};

/**
 * Returns object of Redux dispatchers
 *
 * @param dispatch
 * @return {{getMenuByLocation: (function(*=): *)}}
 */
const mapDispatchToProps = (dispatch) => {
    return {
        getMenuByLocation: (location) => dispatch(getMenuByLocation(location))
    };
};

/**
 * Connect Redux store to the component
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageHeader);

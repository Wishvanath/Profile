import React, { Component, Fragment } from 'react'
import $ from 'jquery'
import 'element-theme-default';
import { Loading} from 'element-react';
import Home from '../views/Home';
export default class HomeLayout extends Component {
    //constructor def
    constructor(props){
        super(props)
        this.state={
            isLoading: true
        }
    }
    //
    componentDidMount(){

        //loading screen
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 1000);

        //sticky menu
        $(window).scroll(function () {
            if ($('.navbar').offset().top > 100) {
              $('.navbar').addClass('nav-scroll');
            } else {
              $('.navbar').removeClass('nav-scroll');
            }
        });

        
    }

    render() {
        return (
            <Fragment>
                
                { this.state.isLoading ? (
               <Loading fullscreen="true" />
                ) : (
                <Home />
                )}   
               
            </Fragment>
        )
    }
}

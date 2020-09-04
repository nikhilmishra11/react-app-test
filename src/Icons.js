import React, { Component } from "react";
import "./App.css";

class Icons extends Component {
    render() {
        switch(this.props.type) {
            case 'home' :
                return <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation" title="Welcome"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>;
            case 'getStarted' :
                return <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation" title="Get Started"><defs><path id="a" d="M0 0h24v24H0V0z"></path></defs><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path><path fill="none" d="M0 0h24v24H0V0z"></path></svg>;
            case 'api' :
                return <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation" title="API Documentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></svg>;
            case 'assessing':
                return <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation" title="How We Assess"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></svg>;
            case 'dashboard' :
                return <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation" title="Dashboard Visualization"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></svg>;
            case 'help' :
                return <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation" title="Help!"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></svg>;
            case 'submit' :
                return <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation" title="Submit"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></svg>;
            default :
                return '';
        }
    }
  }
   
  export default Icons;
import React from 'react';
const doodlesJsonUrl = '../../static/doodles.json';

class DoodlesBrowse extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allDoodles : []
        }
    }

    componentDidMount() {
        fetch(doodlesJsonUrl)
            .then(response => response.json())
            .then(response => this.setState({
                allDoodles: response.feed.entry
            }));
    }


  render() {
    return (
        <span></span>
    );
  }
}

export default DoodlesBrowse;
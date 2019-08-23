import React, { Component } from 'react';

class ResourceForm extends Component {

    render(){
        return(
            <select name="Service Planning/Geographical Area" onChange={this.props.handleAreaChange} value={this.props.area}>
              <option value="1">1 - Antelope Valley</option>
              <option value="2">2 - San Clarita Valley</option>
              <option value="3">3 - San Gabriel Valley</option>
              <option value="4">4 - Metro LA</option>
              <option value="5">5 - West LA</option>
              <option value="6">6 - Central LA</option>
              <option value="7">7 - South East LA</option>
              <option value="8">8 - South Bay</option>
            </select>
        )
    }
}

export default ResourceForm;
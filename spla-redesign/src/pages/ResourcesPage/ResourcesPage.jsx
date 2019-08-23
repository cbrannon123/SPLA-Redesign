import React, { Component } from "react";
import "./ResourcesPage.css";
import ResourceForm from "../../components/ResourceForm/ResourceForm";
import Header from "../../components/Header/Header";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ResourcesPageNav from "../../components/PageNavs/ResourcesPageNav";


class ResourcesPage extends Component {
  constructor() {
    super();
    this.state = {
      area: 1,
      resources: 'https://airtable.com/embed/shrUfJHSxoKVIymPA?backgroundColor=green&layout=card&viewControls=on'
    };
  }

  

  handleAreaChange = e => {
    this.setState({ area: e.target.value });
    if (e.target.value == 1){
      this.setState({resources: "https://airtable.com/embed/shrUfJHSxoKVIymPA?backgroundColor=green&layout=card&viewControls=on"})
    }
    else if (e.target.value == 2){
      this.setState({resources: 'https://airtable.com/embed/shroD5GcPBeuHaXkz?backgroundColor=green&layout=card&viewControls=on'})
    }
    else if (e.target.value == 3){
      this.setState({resources: 'https://airtable.com/embed/shrfpE78oDOHgaNli?backgroundColor=green&layout=card&viewControls=on'})
    }
    else if (e.target.value == 4){
      this.setState({resources: 'https://airtable.com/embed/shrMgK1WPaHDTrSCY?backgroundColor=green&layout=card&viewControls=on'})
    }
    else if (e.target.value == 5){
      this.setState({resources: 'https://airtable.com/embed/shr0hVcXFSzGloHT4?backgroundColor=green&layout=card&viewControls=on'})
    }else if (e.target.value == 6){
      this.setState({resources: 'https://airtable.com/embed/shrKAIM41cIwkcamg?backgroundColor=green&layout=card&viewControls=on'})
    }
    else if (e.target.value == 7){
      this.setState({resources: 'https://airtable.com/embed/shrcoyRWksO5h3hC7?backgroundColor=green&layout=card&viewControls=on'})
    }
    else if (e.target.value == 8){
      this.setState({resources: 'https://airtable.com/embed/shrnRZVPxeTuS9lUB?backgroundColor=green&layout=card&viewControls=on'})
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Row>
          <Col xs={{ span: 6, offset: 3 }}>
            <ResourcesPageNav />
          </Col>
          <br />
        </Row>
        <Row className="site-content-row justify-context-xs-center">
          <Col xs={{ span: 10, offset: 1 }} style={{ textAlign: "center" }}>
            <h3>Resources Near Me</h3>
            Your Location:
            <ResourceForm handleAreaChange={this.handleAreaChange.bind(this)} />
  
            <iframe class="airtable-embed" src={this.state.resources} frameborder="0" onmousewheel="" width="100%" height="533" style={{background: "transparent", border: "1px solid #ccc,"}}></iframe>
            </Col>
        </Row>
      </div>
    );
  }
}

export default ResourcesPage;

import { Component } from 'react';
import './Section.css';

class Section extends Component {
  
  render() {
      return (
        <div className="section">    
            <h1>{this.props.title}</h1>            
            <div>{this.props.children}</div>
        </div>        
      );
  }
}

export default Section;
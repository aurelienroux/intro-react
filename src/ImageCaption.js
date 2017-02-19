// import React from 'react';
//
// class ImageCaption extends React.Component {
//   render() {
//     return (
//       <figure>
//         <img src={this.props.source} alt={this.props.text} />
//         <figcaption>
//           {this.props.text}
//         </figcaption>
//       </figure>
//     );
//   }
// }
//
// export default ImageCaption;
//


import React, { Component } from 'react';

export default class ImageCaption extends Component{
  render(){
    return (
      <figure>
        <img src={this.props.source} alt={this.props.text} />
        <figcaption>
          { this.props.text }
        </figcaption>
      </figure>
    )
  }
}

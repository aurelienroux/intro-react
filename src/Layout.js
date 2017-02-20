// import React from 'react';
//
// class Layout extends React.Component {
//   render() {
//     return (
//       <div className="layout">
//         <nav className="main-nav">
//           <ul>
//             <li><a href="/">Home</a></li>
//           </ul>
//         </nav>
//         <main>
//           {this.props.children}
//         </main>
//         <footer>
//           Copywhat 2016 Kittens
//         </footer>
//       </div>
//     );
//   }
// }
//
// export default Layout;

import React, {Component} from 'react'

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <nav className="main-nav">
          <ul>
            <li>
                <a href="/">Home sweet home</a>
            </li>
          </ul>
        </nav>
        <main>
          {this.props.children}
        </main>
        <footer>
          Copywhat 2016 Kittens
        </footer>
      </div>
    )
  }
}

import React from 'react';

class Layout extends React.Component {
  render() {
    return (
      <div class="layout">
        <nav class="main-nav">
          <ul>
            <li><a href="/">Home</a></li>
          </ul>
        </nav>
        <main>
          <!-- the varying content should go here -->
        </main>
        <footer>
          Copywhat 2016 Kittens
        </footer>
      </div>
    );
  }
}

export default Layout;

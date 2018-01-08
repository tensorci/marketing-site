import React, { Component } from 'react';

import Header from './components/shared/Header';
import Footer from './components/shared/footers/Footer';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div id="appContainer" className={document.location.pathname.split('/')[1]}>
        <Header fixed={true} />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
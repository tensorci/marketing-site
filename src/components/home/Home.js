import React, { Component } from 'react';
import Ajax from '../../utils/Ajax';
import FormInput from '../shared/form/FormInput';


class Home extends Component {

  constructor(props) {
    super(props);
    this.setBetaCodeInputRef = this.setBetaCodeInputRef.bind(this);
    this.loginWithGithub = this.loginWithGithub.bind(this);
  }

  setBetaCodeInputRef(ref) {
    this.betaCodeInput = ref;
  }

  loginWithGithub() {
    if (!this.betaCodeInput.isValid()) {
      return;
    }

    const betaCode = this.betaCodeInput.serialize();

    Ajax.get('/api/github/oauth_url', { 'betaCode': betaCode })
      .then((resp) => {
        if (resp.status === 200) {
          resp.json().then((data) => {
            if (data.url) {
              window.location = data.url;
            }
          });
        } else {
          resp.json().then((data) => {
            if (data.error) {
              console.error(data.error);
            } else {
              console.error('Unknown error while requesting OAuth url.');
            }
          });
        }
      });
  }

  render() {
    return (
      <div id="home">
        <div className="content">
          <FormInput placeholder="Beta Access Code" required={true} ref={this.setBetaCodeInputRef}/>
          <button onClick={this.loginWithGithub}>Login with GitHub</button>
        </div>
      </div>
    );
  }
}

export default Home;
import React, { Component } from 'react';
import Ajax from '../../utils/Ajax';
import FormInput from '../shared/form/FormInput';
import LgSpinnerBtn from '../widgets/LgSpinnerBtn';

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

    this.loginBtn.setState({ showSpinner: true });

    Ajax.get('/api/github/oauth_url', { 'betaCode': betaCode })
      .then((resp) => {
        if (resp.status === 200) {
          resp.json().then((data) => {
            if (data.url) {
              window.location = data.url;
            }
          });
        } else {
          this.loginBtn.setState({ showSpinner: false });

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
        <div className="main-content">
          <div id="login">
            <div className="lead-text">You should login with GitHub. Just do it.</div>
            <div className="inputs">
              <FormInput placeholder="Beta Access Code" required={true} ref={this.setBetaCodeInputRef}/>
              <div className="btn-container">
                <LgSpinnerBtn btnText="Login with GitHub" ref={(r) => { this.loginBtn = r; }} onClick={this.loginWithGithub}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
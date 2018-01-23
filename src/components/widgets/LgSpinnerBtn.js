import React, { Component } from 'react';
import HorizSpinner from './spinners/HorizSpinner';

class LgSpinnerBtn extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);

    this.state = {
      showSpinner: this.props.showSpinner || false
    };
  }

  onClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const btnText = this.props.btnText;
    var classes = 'lg-spinner-btn';

    if (this.state.showSpinner) {
      classes += ' loading';
    }

    return (
      <div className={classes}>
        <button onClick={this.onClick}>{btnText}</button>
        <HorizSpinner />
      </div>
    );
  }
}

export default LgSpinnerBtn;
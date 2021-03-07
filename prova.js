'use strict';

class primaprova extends React.Component {
  constructor(props) {
    super(props);
    this.state = { premuto: false };
  }

  render() {
    if (this.state.premuto) {
      return 'Bottone premuto';
    }

    return e(
      'button',
      { onClick: () => this.setState({ premuto: true }) },
      'Premi'
    );
  }
}

const e = React.createElement;
const domContainer = document.querySelector('#prima_prova');
ReactDOM.render(e(primaprova), domContainer);
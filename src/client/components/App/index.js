import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import TodoContainer from '../TodoContainer';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.listen(() => this.forceUpdate());
  }

  render() {
    const { store, actions } = this.props;
    return (
      <MainContainer>
        <Header />
        <TodoContainer store={store} actions={actions} />
      </MainContainer>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

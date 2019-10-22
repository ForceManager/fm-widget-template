import React, { useState, useEffect, useCallback } from 'react';
import { bridge, axios } from 'fm-bridge';
import { Title, Button, Text } from 'hoi-poi-ui';
import CONSTANTS from './constants';
import './App.scss';

function App() {
  const [context, setContext] = useState();
  const [details, setDetails] = useState();

  useEffect(() => {
    bridge
      .getContext()
      .then((res) => setContext(res))
      .catch((err) => console.warn(err));
  }, []);

  const handleButtonClick = useCallback(() => {
    let url;
    if (context.entity === CONSTANTS.ENTITY.ACCOUNT.toString()) {
      url = `/opportunities/${context.entityId.toString()}`;
    } else if (context.entity === CONSTANTS.ENTITY.OPPORTUNITY.toString()) {
      url = `/accounts/${context.entityId.toString()}`;
    }
    axios
      .get(url)
      .then(setDetails)
      .catch((err) => console.warn(err));
  }, [context]);

  return (
    <div className="App">
      <Title>I'm a custom widget</Title>
      <Button
        color="primary"
        onClick={handleButtonClick}
        isDisabled={!context}
        className="get-button"
      >
        Get details
      </Button>
      <Text size="large">{details && (details.name || details.accountId1.value)}</Text>
    </div>
  );
}

export default App;

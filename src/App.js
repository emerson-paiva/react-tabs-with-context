import React from 'react';

import { Tabs, Tab } from './Tabs'

function App() {
  return (
    <Tabs defaultTabId="active">
      <Tab tabId="active">Ativos</Tab>
      <Tab tabId="disabled">Desativos</Tab>
    </Tabs>
  );
}

export default App;

import React from "react";

import { Tabs, Tab, TabPanel } from "./Tabs";

function App() {
  return (
    <Tabs defaultTabId="active">
      <Tab tabId="active">Ativos</Tab>
      <Tab tabId="disabled">Desativos</Tab>
      <TabPanel tabId="active">Ativos</TabPanel>
      <TabPanel tabId="disabled">Desativados</TabPanel>
    </Tabs>
  );
}

export default App;

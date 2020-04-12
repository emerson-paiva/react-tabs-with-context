import React, { useState } from "react";
import { Provider, Consumer } from "./context";

const TabPanel = ({ children, tabId }) => (
  <Consumer>
    {({ activeTabId }) => {
      const isActive = activeTabId === tabId;

      return <div>{children}</div>;
    }}
  </Consumer>
);

const Tab = ({ children, tabId }) => {
  return (
    <Consumer>
      {({ activeTabId, setActiveTabId }) => {
        const isActive = activeTabId === tabId;

        return (
          <button
            type="button"
            isActive={isActive}
            onClick={() => setActiveTabId(tabId)}
          >
            {children}
          </button>
        );
      }}
    </Consumer>
  );
};

const TabContext = ({ defaultTabId, children }) => {
  const [activeTabId, setActiveTabId] = useState(defaultTabId);

  return (
    <Provider value={{ activeTabId, setActiveTabId }}>{children}</Provider>
  );
};

const Tabs = ({ defaultTabId, children }) => (
  <TabContext defaultTabId={defaultTabId}>{children}</TabContext>
);

export { Tabs, Tab, TabPanel };

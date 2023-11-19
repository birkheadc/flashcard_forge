import * as React from 'react';
import { createRoot } from 'react-dom/client';
import AppRoot from './src/AppRoot';

const rootContainer = document.getElementById("app-root");

if (rootContainer != null) {
  const root = createRoot(rootContainer);
  root.render(<AppRoot />);
}
/*
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ConfigWrapper } from "./Config.tsx";
import "./index.scss";
import { AppStateWrapper } from "./AppState.tsx";

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js', {
    scope: '/'
  }).then((register) => {
    console.log('service worker registered', register)
  })
  .catch((err) => {
    console.log('service worker not registered', err)
  })
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigWrapper>
      <AppStateWrapper>
        <App />
      </AppStateWrapper>
    </ConfigWrapper>
  </React.StrictMode>
);

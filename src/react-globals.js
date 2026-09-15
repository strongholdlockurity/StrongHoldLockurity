/**
 * The design-system bundle is a plain browser script: it reads window.React
 * and writes window.StrongholdLockurityDesignSystem_5c361a. React therefore
 * has to be on window before the bundle is evaluated.
 *
 * This file exists only to guarantee that order. ES module imports are all
 * evaluated before the importing module's body runs, so the globals have to
 * be set in a module of their own that boot.js imports before the bundle.
 */
"use client";

import React from "react";
import * as ReactDOMBase from "react-dom";
import { createRoot, hydrateRoot } from "react-dom/client";

window.React = React;
window.ReactDOM = { ...ReactDOMBase, createRoot, hydrateRoot };

export { React, createRoot };

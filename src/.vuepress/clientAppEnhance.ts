/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

// import "./styles/main.scss";
// @ts-ignore
// import APIRun from "./components/APIRun";

import { defineClientAppEnhance } from "@vuepress/client";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  // app.component("APIRun", APIRun);
});

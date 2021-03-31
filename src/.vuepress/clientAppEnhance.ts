// import "./styles/main.scss";
// @ts-ignore
import APIRun from "./components/APIRun";

import { defineClientAppEnhance } from "@vuepress/client";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component("APIRun", APIRun);
});

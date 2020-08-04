import React from "react";
import "./Instructions.css";
import Instructions2 from "../instructions2/Instructions2";

function Instructions(props) {
  return (
    <div>
      <h2>Setup</h2>
      <p>In the terminal:</p>
      <pre>npm install gh-pages --save-dev</pre>

      <p>In package.json JSON object, add:</p>
      <pre>
        "homepage": "http://{props.name}.github.io/
        {props.repo}"
      </pre>

      <p>In package.json "scripts", add:</p>
      <pre>
        "predeploy": "npm run build",
        <br />
        "deploy": "gh-pages -d build"
      </pre>

      <h2>Deployment</h2>
      <p>Add, commit, and push changes to your GitHub repository</p>
      <p>In the terminal:</p>
      <pre>npm run deploy</pre>
      <Instructions2 repo={props.repo} />
    </div>
  );
}

export default Instructions;

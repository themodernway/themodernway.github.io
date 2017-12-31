import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Application from "./Application";

declare const module: any;

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Application label="The Modern Way" />
        </AppContainer>,
        document.getElementById("root"),
    );
};

render();

if (module.hot) {
    module.hot.accept();
}

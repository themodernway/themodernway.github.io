import React, { Component } from "react";
import styles from "./Application.scss";
import Panel from "./Panel";

class Application extends Component<ApplicationProps, ApplicationState> {
    constructor(props: ApplicationProps) {
        super(props);

        this.state = {
            updated: new Date(),
        };
    }

    public render() {
        const { label } = this.props;
        const { updated } = this.state;

        return (
            <div className={styles.ApplicationClass}>
                <h3>{label}</h3>
                <Panel label={label} />
                <p>{updated.toLocaleString()}</p>
            </div>
        );
    }
}

interface ApplicationProps {
    label: string;
}

interface ApplicationState {
    updated: Date;
}

export default Application;

import React, { Component } from "react";
import styles from "./Panel.scss";

class Panel extends Component<PanelProps, PanelState> {
    constructor(props: PanelProps) {
        super(props);

        this.state = {
            value: "1 2 3",
        };
    }

    public render() {
        const { label } = this.props;
        const { value } = this.state;

        return (
            <div className={styles.PanelClass}>
                <div className={styles.DemoResultsBox} id="DemoResultsBox">
                    <pre>{value}</pre>
                </div>
            </div>
        );
    }
}

interface PanelProps {
    label: string;
}

interface PanelState {
    value: string;
}

export default Panel;

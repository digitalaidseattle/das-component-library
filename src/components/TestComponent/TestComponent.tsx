import React from "react";

export interface TestComponentProps {
    label: string;
}

const TestComponent = (props: TestComponentProps) => {
    return <button>{props.label} </button>;
};

export default TestComponent;
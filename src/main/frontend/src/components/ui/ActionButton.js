import {Button, Row} from "react-bootstrap";
import React from "react";

//default ActionButton is wider and primary
export function DefaultActionButton(props) {
    const {children} = props;

    return (
        <div className="m-1 col-auto w-100">
            <Button className="w-100" variant="primary" size="lg" {...props}>
                {children}
            </Button>
        </div>
    );
}

export function ActionButton(props) {
    const {children, defaultButton} = props;

    return (
        <div className="m-1 col-auto">
            <Button variant="outline-primary" size="lg" {...props}>
                {children}
            </Button>
        </div>
    );
}

//a horizontal bar with centered buttons
//fill up with ActionButtons
export function ActionButtonBar(props) {
    const {children} = props;
    return (
        <Row className="mt-5 justify-content-center">
            {children}
        </Row>
    )
}
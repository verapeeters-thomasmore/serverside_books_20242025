import {useAuthenticationContext} from "../../contexts/authenticationcontext";
import {PasswordControl, UsernameControl} from "../../components/auth/AuthControls";
import React, {useCallback} from "react";
import {useMessageContext} from "../../contexts/messagecontext";
import {Col, Form, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {ActionButton, ActionButtonBar, DefaultActionButton} from "../../components/ui/ActionButton";
import {useForm} from "../../utilities/formutilities";

export function LoginPage() {
    const initialObjectInitializer = useCallback(() => ({username: "", password: ""}), []);
    const {tempObject, onChange, resetTempObject} = useForm(initialObjectInitializer);
    const {isLoggedIn, authenticate, username} = useAuthenticationContext();
    const {clearAllMessages} = useMessageContext();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        clearAllMessages();
        const result = await authenticate(tempObject.username, tempObject.password);
        if (result) navigate("/", {replace: true});
    }

    if (isLoggedIn) return <div className="text-center m-5">logged in as {username}</div>;

    return (
        <>
            <h1 className="mt-1">Login</h1>
            <Form className="text-start m-5"
                  onSubmit={e => handleSubmit(e)}>
                <Row>
                    <UsernameControl onChange={onChange} tempObject={tempObject}/>
                    <PasswordControl onChange={onChange} tempObject={tempObject}/>
                </Row>
                <ActionButtonBar>
                    <DefaultActionButton type="submit">login</DefaultActionButton>
                    <ActionButton onClick={() => navigate(`/`)}>cancel</ActionButton>
                    <ActionButton onClick={resetTempObject}>reset</ActionButton>
                </ActionButtonBar>
                <Row>
                    <Col className="text-end">not registered? <Link to="/signup">go to signup</Link></Col>
                </Row>
            </Form>
        </>
    )
}
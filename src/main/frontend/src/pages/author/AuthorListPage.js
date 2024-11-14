import React from "react";
import {NavButtonBar} from "../../components/ui/NavButton";
import {useAuthors} from "../../api/authorsapi";
import {Card, Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {NewAuthorButton} from "../../components/author/AuthorButtons";

function Author(props) {
    const {author} = props;
    const navigate = useNavigate();

    return (
        <Col sx={12} sm={6} lg={4} xl={2} className='mt-3'>
            <Card className="h-100 shadow-sm" style={{cursor: "pointer"}}
                  onClick={() => navigate(`/authors/view/${author.id}`)}>
                <Card.Body>
                    <Card.Title>{author.name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

function AuthorList(props) {
    const {authors} = props;
    return (
        <Row>
            <h1>authors</h1>
            {authors?.map(a => <Author key={a.id} author={a}/>)}
        </Row>
    );
}

export function AuthorListPage() {
    const {authors} = useAuthors();

    return (
        <>
            <AuthorList authors={authors}/>
            <NavButtonBar>
                <NewAuthorButton/>
            </NavButtonBar>
        </>
    )
}
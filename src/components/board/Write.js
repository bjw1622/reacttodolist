import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Write = () => {
  return (
    <Form style={{ margin: "0 87.273px", padding: "0 15px" }}>
      <h2 style={{ marginTop: "20px" }}>글쓰기</h2>
      <hr />
      <Form.Group className="mb-3">
        <Form.Label>제목</Form.Label>
        <Form.Control type="text" placeholder="제목" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>작성자</Form.Label>
        <Form.Control type="text" placeholder="테스터" readOnly />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>글 내용</Form.Label>
        <Form.Control as="textarea" placeholder="글 내용" />
      </Form.Group>
      <Button variant="primary" type="submit">
        글작성
      </Button>
    </Form>
  );
};
export default Write;

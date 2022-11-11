import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";
import { boardAction } from "./BoardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const BodyContent = styled.div`
   {
    margin: 0 87.273px;
    padding: 0 15px;
  }
`;
const FindDiv = styled.div`
   {
    display: flex;
  }
`;
const Index = () => {
  const getBoardList = useSelector((state) => state.boardReducer.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(boardAction.getBoardListRequest());
  }, []);

  return (
    <BodyContent>
      {/* <h2 className={styles.Title}>게시판</h2> */}
      <hr />
      <FindDiv>
        <Form.Select
          aria-label="Default select example"
          style={{ width: "75px", height: "40px", marginRight: "5px" }}
        >
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </Form.Select>
        <Form.Select
          aria-label="Default select example"
          style={{ width: "100px", height: "40px", marginRight: "5px" }}
        >
          <option value="Name">작성자</option>
          <option value="Title">제목</option>
        </Form.Select>
        <Form>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
            style={{ width: "200px", height: "45px", marginRight: "5px" }}
          >
            <Form.Control type="text" style={{ height: "40px" }} />
          </Form.Group>
        </Form>
        <Button
          variant="info"
          style={{ width: "60px", height: "40px", color: "white" }}
        >
          검색
        </Button>
      </FindDiv>
      <Table striped hover>
        <thead style={{ borderStyle: "none" }}>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">제목</th>
            <th className="text-center">작성자</th>
            <th className="text-center">댓글</th>
            <th className="text-center">추천</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">{getBoardList.length}</td>
            <td className="text-center">Mark</td>
            <td className="text-center">Otto</td>
            <td className="text-center">2</td>
            <td className="text-center">3</td>
          </tr>
        </tbody>
      </Table>
      <ButtonGroup
        className="me-2"
        aria-label="First group"
        style={{ display: "block", textAlign: "center" }}
      >
        <Button variant="secondary" style={{ color: "white" }}>
          1
        </Button>
        <Button variant="secondary" style={{ color: "white" }}>
          2
        </Button>
        <Button variant="secondary" style={{ color: "white" }}>
          3
        </Button>
        <Button variant="secondary" style={{ color: "white" }}>
          4
        </Button>
      </ButtonGroup>
      <Link to="/board/write">
        <Button variant="primary">글쓰기</Button>
      </Link>
    </BodyContent>
  );
};

export default Index;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Card, Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCart } from "../Action/Action";

function Mobile(props) {
  const [mobile, setmobile] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(" http://localhost:3000/MobileProduct").then((r) => {
      // console.log(r.data);
      setmobile(r.data);
    });
  },[]);

  const Buy = (id) => {
    let quantity = document.getElementById("q_" + id).value;
    if (quantity && parseInt(quantity) != 0) {
      let Name = document.getElementById("N_" + id).innerText;
      let Product_sprice = document.getElementById("sprice" + id).innerText;
      let Total_Amount = Product_sprice * quantity;
      let user_id = 4;

      let obj = {
        Name,
        quantity_id: id,
        quantity,
        Product_sprice,
        Total_Amount,
        user_id,
      };
      axios.post(" http://localhost:3000/MobileSell", obj).then((r) => {
        document.getElementById("q_" + id).value = "";
        re();
      });
    }
  };

  const re = () => {
    fetch("http://localhost:3000/MobileSell/?user_id=4").then((r) => {
      r.json().then((rs) => {
        let totalV = 0;
        rs.map((y) => (totalV += parseInt(y.quantity)));
        dispatch(addCart(totalV));
      });
    });
  };

  return (
    <div>
      {mobile.map((m) => (
        <>
          <Container>
            <Row>
              <Col className="pt-4 ">
                <Card style={{ width: "18rem   width: 75% float: left " }}>
                  <Card.Body className="bg bg-secondary text-white">
                    <Card.Img
                      variant="top"
                      src={m.image}
                      style={{ height: "15rem" }}

                    />
                  </Card.Body>
                </Card>
              </Col>

              <Col className="pt-4 ">
                <Card
                  style={{
                    width: "18rem   width: 75% float: left  height: 15rem",
                  }}
                >
                  <Card.Body className="bg bg-secondary text-white">
                    <h1>
                      Product : <span> Mobile</span>
                    </h1>
                    <h2>
                      Name:{""} <span id={`N_` + m.id}> {m.name}</span>{" "}
                    </h2>

                    <h4>
                      MRP :{""} <del id={`mrp_` + m.id}>{m.price}</del>
                    </h4>

                    <h5>
                      Discount : {""}{" "}
                      <span id={`discount` + m.id}>{m.discount}</span>%
                    </h5>
                    <h5>
                      Price: {""}
                      <ins id={`sprice` + m.id}>
                        {m.price - (m.price * m.discount) / 100}
                      </ins>
                    </h5>
                    <input type="number" id={`q_` + m.id} />

                    <Button variant="danger" onClick={() => Buy(m.id)}>
                      Buy
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      ))}
    </div>
  );
}

export default Mobile;

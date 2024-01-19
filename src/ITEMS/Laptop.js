import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import { usedi} from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { addCart } from "../Action/Action";

function Laptop(props) {
  let dispatch = useDispatch();
  const [x, xval] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/Laptop").then((r) => {
      // console.log(r);
      xval(r.data);
    });
  },[]);

  const addProduct = (id) => {
    let quantity = document.getElementById("q_" + id).value;

    if (quantity && parseInt(quantity) != 0) {
      let Product_sprice = document.getElementById("sprice" + id).innerText;
      let Name = document.getElementById("N_" + id).innerText;
      let total_amount = Product_sprice * quantity;
      let user_id = 3;

      let obj = {
        Name,
        quantity_id: id,
        user_id,
        quantity,
        Product_sprice,
        total_amount,
      };

      axios.post(" http://localhost:3000/Cont", obj).then((r) => tq());

      document.getElementById("q_" + id).value = "";
    }
  };

  const tq = () => {
    fetch("http://localhost:3000/Cont/?user_id=3").then((r) => {
      r.json().then((rs) => {
        let tot = 0;
        rs.map((x) => (tot += parseInt(x.quantity)));
        dispatch(addCart(tot));
      });
    });
  };

  return (
    <div>
      <div className="pt-4">
        {x.map((info) => {
          return (
            <div>
              <>
                <Container>
                  <Row>
                    <Col></Col>
                    <span className="bg bg-dark text-white">
                      <Col>
                        <img
                          src={info.image}
                          alt="product image"
                          className="h-70 w-50 pt-5 "
                          mobile-sizes="50px,50px"
                        />
                      </Col>
                      <Col className="pt-5  ">
                        <h1>
                          Name : {""}
                          <span id={`N_` + info.id}>{info.name}</span>
                        </h1>
                        <h3>
                          MRP : <del id={`mrp_` + info.id}>{info.price}</del>
                        </h3>
                        <h4>
                          discount :{" "}
                          <span id={`discount_` + info.id}>
                            {info.discount}
                          </span>
                          %
                        </h4>

                        <h5>
                          Price :{" "}
                          <ins id={`sprice` + info.id}>
                            {info.price - (info.price * info.discount) / 100}
                          </ins>
                        </h5>
                        <input type="number" min="0" id={`q_` + info.id} />

                        <button
                          className="btn btn-danger"
                          onClick={() => addProduct(info.id)}
                        >
                          Cart
                        </button>
                      </Col>
                    </span>
                    <Col></Col>
                  </Row>
                </Container>
                .
                
              </>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Laptop;

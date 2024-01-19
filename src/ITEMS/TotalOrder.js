import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

function TotalOrder(props) {
  let [order, setorder] = useState([]);
  let [mobile, setmobile] = useState([]);

  let Laptop = () => {
    axios.get("http://localhost:3000/Cont").then((r) => {
      // console.log(r.data);
      setorder(r.data);
    });
  };
  // let Mobile = () => {
  //   axios.get("http://localhost:3000/MobileSell").then((r) => {
  //     setmobile(r.data);
      
  //   });
  // };

  useEffect(()=>{
    axios.get('http://localhost:3000/MobileSell')
    .then(response => {
      setmobile(response.data)
    })
    .catch(error => {
      console.log("error");
    });
  },[])
  


  useEffect(() => {
    Laptop()
  });

  let index = 1;
  let ind = 1;
  return (
    <>
      <div className="pt-3  ">
        <Container>
          <Table className="pt-5 m-4 " variant="dark" striped bordered hover>
            <thead>
              <tr>
                <h3 variant="dark "> Laptop Data</h3>
              </tr>
              <tr>
                <td>No</td>
                <td>User_Id</td>
                <td>Product_Name</td>
                <td>quantity</td>
                <td>Price</td>
                <td>Total_Amount</td>
              </tr>
            </thead>
            <tbody>
              {order.map((x) => (
                <>
                  <tr>
                    <td>{index++}</td>
                    <td>{x.user_id}</td>
                    <td>{x.Name}</td>
                    <td>{x.quantity}</td>
                    <td>{x.Product_sprice}</td>
                    <td>{x.total_amount}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>

      <div className="pt-3  ">
        <Container>
          <Table className="pt-5  m-4" variant="dark" striped bordered hover>
            <thead>
              <tr>
                <h3 variant="dark"> Mobile Data</h3>
              </tr>
              <tr>
                <td>No</td>
                <td>User_Id</td>
                <td>Product_Name</td>
                <td>quantity</td>
                <td>Price</td>
                <td>Total_Amount</td>
              </tr>
            </thead>
            <tbody>
              {mobile.map((t) => (
                <>
                  <tr>
                    <td>{ind++}</td>
                    <td>{t.user_id}</td>
                    <td>{t.Name}</td>
                    <td>{t.quantity}</td>
                    <td>{t.Product_sprice}</td>
                    <td>{t.Total_Amount}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
}

export default TotalOrder;

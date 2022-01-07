import React from "react";
import { Link } from "react-router-dom";
import {row, col, Image, ListGroup, Button, Card,
} from "react-router-bootstrap";
import Rating from "../components/Rating";
import products from "../products";
import { useParams } from "react-router-dom";

function ProductScreen() {
  let idParam = useParams();
  // useParamms and find() was used to look for the product id
  const product = products.find((p) => {
    // console.log(p._id)
    console.log("this is number", idParam.id);
    return p._id == idParam.id;
  });
  // console.log(product);

  return <div>{product.name}</div>;
}

export default ProductScreen;

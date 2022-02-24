import React from "react";
import {
  Button,
  Card,
  CardGroup,
  Carousel,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

interface IHeader {
  children: React.ReactNode;
  home?: boolean;
}

function CatCards() {
  const arr = [
    { id: 0, ref: "/img/cat0.jpg" },
    { id: 1, ref: "/img/cat1.jpg" },
    { id: 2, ref: "/img/cat2.jpg" },
    /*{ id: 3, ref: "/img/cat3.jpg" },*/
    { id: 4, ref: "/img/cat4.jpg" },
  ];
  return (
    <CardGroup>
      {arr.map((item, index) => (
        <Card style={{ width: "18rem" }} key={item.id}>
          <Card.ImgOverlay></Card.ImgOverlay>
          <Card.Img variant="top" src={`${item.ref}`} />
          <Card.Body className="p-fixed ">
            <Card.Title>Вредная морда {index}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              100 000 руб.
            </Card.Subtitle>
            <Card.Text>Царь ищет холопа в вечное рабство</Card.Text>
            <Card.Link>
              <Button variant="danger">Подробнее</Button>
              {/* <a href="https://www.instagram.com/aliceland_cats/">
                <img
                  src="/icon/bookmark.svg"
                  alt="Bootstrap"
                  width="32"
                  height="32"
                />
              </a>*/}
            </Card.Link>
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
  );
}

export default CatCards;

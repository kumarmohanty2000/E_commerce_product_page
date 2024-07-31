import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Carousel,
  Pagination,
} from "react-bootstrap";
import { useState } from "react";
import Header from "./Header";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$19.99",
    description: "This is a great product.",
    reviews: "★★★★☆",
    images: [
      "https://picsum.photos/seed/{seed}picsum/200/300",
      "https://picsum.photos/seed/{tom}picsum/200/300",
      "https://picsum.photos/seed/picsum/200/300",
      "https://picsum.photos/seed/picsum/200/300",
      "https://picsum.photos/seed/picsum/200/300",
    ],
  },
  {
    id: 2,
    name: "Product 2",
    price: "$29.99",
    description: "This product is even better.",
    reviews: "★★★★★",
    images: [
      "https://via.placeholder.com/400x300?text=Product+2+Image+1",
      "https://via.placeholder.com/400x300?text=Product+2+Image+2",
      "https://via.placeholder.com/400x300?text=Product+2+Image+3",
      "https://via.placeholder.com/400x300?text=Product+1+Image+4",
      "https://via.placeholder.com/400x300?text=Product+1+Image+5",
    ],
  },
  {
    id: 3,
    name: "Product 3",
    price: "$29.99",
    description: "This product is even better.",
    reviews: "★★★★★",
    images: [
      "https://via.placeholder.com/400x300?text=Product+2+Image+1",
      "https://via.placeholder.com/400x300?text=Product+2+Image+2",
      "https://via.placeholder.com/400x300?text=Product+2+Image+3",
      "https://via.placeholder.com/400x300?text=Product+1+Image+4",
      "https://via.placeholder.com/400x300?text=Product+1+Image+5",
    ],
  },
  {
    id: 4,
    name: "Product 4",
    price: "$29.99",
    description: "This product is even better.",
    reviews: "★★★★★",
    images: [
      "https://via.placeholder.com/400x300?text=Product+2+Image+1",
      "https://via.placeholder.com/400x300?text=Product+2+Image+2",
      "https://via.placeholder.com/400x300?text=Product+2+Image+3",
      "https://via.placeholder.com/400x300?text=Product+1+Image+4",
      "https://via.placeholder.com/400x300?text=Product+1+Image+5",
    ],
  },
  {
    id: 5,
    name: "Product 5",
    price: "$29.99",
    description: "This product is even better.",
    reviews: "★★★★★",
    images: [
      "https://via.placeholder.com/400x300?text=Product+2+Image+1",
      "https://via.placeholder.com/400x300?text=Product+2+Image+2",
      "https://via.placeholder.com/400x300?text=Product+2+Image+3",
      "https://via.placeholder.com/400x300?text=Product+1+Image+4",
      "https://via.placeholder.com/400x300?text=Product+1+Image+5",
    ],
  },
  {
    id: 6,
    name: "Product 6",
    price: "$29.99",
    description: "This product is even better.",
    reviews: "★★★★★",
    images: [
      "https://via.placeholder.com/400x300?text=Product+2+Image+1",
      "https://via.placeholder.com/400x300?text=Product+2+Image+2",
      "https://via.placeholder.com/400x300?text=Product+2+Image+3",
      "https://via.placeholder.com/400x300?text=Product+1+Image+4",
      "https://via.placeholder.com/400x300?text=Product+1+Image+5",
    ],
  },
  {
    id: 7,
    name: "Product 7",
    price: "$29.99",
    description: "This product is even better.",
    reviews: "★★★★★",
    images: [
      "https://via.placeholder.com/400x300?text=Product+2+Image+1",
      "https://via.placeholder.com/400x300?text=Product+2+Image+2",
      "https://via.placeholder.com/400x300?text=Product+2+Image+3",
      "https://via.placeholder.com/400x300?text=Product+1+Image+4",
      "https://via.placeholder.com/400x300?text=Product+1+Image+5",
    ],
  },
  {
    id: 8,
    name: "Product 8",
    price: "$29.99",
    description: "This product is even better.",
    reviews: "★★★★★",
    images: [
      "https://via.placeholder.com/400x300?text=Product+2+Image+1",
      "https://via.placeholder.com/400x300?text=Product+2+Image+2",
      "https://via.placeholder.com/400x300?text=Product+2+Image+3",
      "https://via.placeholder.com/400x300?text=Product+1+Image+4",
      "https://via.placeholder.com/400x300?text=Product+1+Image+5",
    ],
  },
  {
    id: 9,
    name: "Product 9",
    price: "$19.99",
    description: "This is a great product.",
    reviews: "★★★★☆",
    images: [
      "https://picsum.photos/seed/{seed}picsum/200/300",
      "https://picsum.photos/seed/{tom}picsum/200/300",
      "https://picsum.photos/seed/picsum/200/300",
      "https://picsum.photos/seed/picsum/200/300",
      "https://picsum.photos/seed/picsum/200/300",
    ],
  },
];

const itemsPerPage = 3;

const ProductGallery = () => {
  
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);


  return (
    <>
    <Header/>
    <Container>
      <Row >
        {currentItems.map((product) => (
          <Col
            key={product.id}
            sm={12}
            md={6}
            lg={4}
            className="mb-4"
            style={{ width: "425px", height: "500px" }}
          >
            <Card>
              <Carousel>
                {product.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={`Slide ${index}`}
                      style={{ width: "400px", height: "300px" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              {/* <Card.Img variant="top" src={product.image} style={{ width: '400px', height: '300px'}} /> */}
              <Card.Body style={{cursor:"pointer"}}>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>
                  <strong>Price: </strong>
                  {product.price}
                </Card.Text>
                <Card.Text>
                  <strong>Reviews: </strong>
                  {product.reviews}
                </Card.Text>
                <Button variant="primary">Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination>
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev
          onClick={() =>
            handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
          }
        />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() =>
            handlePageChange(
              currentPage < totalPages ? currentPage + 1 : totalPages
            )
          }
        />
        <Pagination.Last onClick={() => handlePageChange(totalPages)} />
      </Pagination>
    </Container>
    </>
  );
};

export default ProductGallery;

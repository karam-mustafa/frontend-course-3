import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Title } from "./shared/StyledComponents";

function CardComponent({ data }) {
  return (
    <Card className="mt-5">
      {data?.images ? <Card.Img variant="top" src={data?.images[0]} /> : null}

      <Card.Body>
        <Title>karam</Title>
        <Card.Text>{data.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;

import { Badge } from 'react-bootstrap';

function Tags({ text, color }) {
  return <Badge bg={color}>{text}</Badge>;
}

export default Tags;

import Col from './components/Col';
import Row from './components/Row';
import './app.css';

function App() {
  return (
    <div>
      <Row>
        <Col sm={12} col={6}>
          <div className="item">col-6</div>
        </Col>
        <Col sm={12} col={6}>
          <div className="item">col-6</div>
        </Col>
      </Row>
      <Row>
        <Col sm={6} col={4}>
          <div className="item">col-4</div>
        </Col>
        <Col sm={6} col={4}>
          <div className="item">col-4</div>
        </Col>
        <Col sm={12} col={4}>
          <div className="item">col-4</div>
        </Col>
      </Row>
      <Row>
        <Col sm={6} col={3}>
          <div className="item">col-3</div>
        </Col>
        <Col sm={6} col={3}>
          <div className="item">col-3</div>
        </Col>
        <Col sm={6} col={3}>
          <div className="item">col-3</div>
        </Col>
        <Col sm={6} col={3}>
          <div className="item">col-3</div>
        </Col>
      </Row>
    </div>
  );
}

export default App;

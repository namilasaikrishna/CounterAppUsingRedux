import React from 'react'
import {Card,Button,Container,Row,Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

import {increaseCount, decreaseCount} from '../actions'
import {useSelector, useDispatch} from 'react-redux'
import {resetCount} from '../actions'

const Controllers = () => {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  return (
    <Container className="Controllers">
    <Row>
    <Col xs={2}>
    <Button id="minusBtn" varient="danger" onClick={() => dispatch(decreaseCount(count))}>Decrement</Button>
    </Col>
    <Col xs={2}><Button id="plusBtn" varient="Success" onClick={() => dispatch(increaseCount(count))}>Increment</Button></Col>
    <Col><Button id="resetBtn" onClick={() => dispatch(resetCount())}>Reset</Button></Col>
    </Row>
    </Container>
    
  )
}

export default Controllers
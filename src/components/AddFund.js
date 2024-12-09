import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './AddFund.css';
import { Button, Col, Container, Form, Image, Row, Stack } from 'react-bootstrap';
import FundInboxes from './FundInboxes';
const AddFund = () => {
  return (
    <div>
      <h4>AddFund</h4>
      <Nav variant="pills" className='mt-3 secondary gap-2'>
        <Nav.Item>
          <Nav.Link href='#payin'>Pay In</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='#check-alloc-fund'>Check Allocated Funds</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='#recent-trans'>Recent Transaction</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='#modify-alloc'>Modify Allocation</Nav.Link>
        </Nav.Item>
      </Nav>

      <div className='d-flex justify-content-between mt-2'>
        <p className='d-inline text-idColor'>Add funds as per allocation₹</p>
        <p className='d-inline text-danger'><Image src={require('../assets/warning.png')} />Note: Minimum value should be 100</p>
      </div>
      <Container>
        <Row>
          <Col>
            <FundInboxes name="Equity(NSE/BSE)" />
          </Col>
          <Col>
            <FundInboxes name="F&O(NFO/BFO)" />
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col>
            <FundInboxes name="Currency(BCD)" />
          </Col>
          <Col>
            <FundInboxes name="Commodity(BFX)" />
          </Col>
        </Row>
      </Container>

      <div className='mt-3 bg-inBg p-2 rounded-1'>
        <p className='' style={{ color: "#989799", fontSize: "20px" }}>Total Amount</p>
        <input type="text" placeholder="0.0" className=' bg-inBg border border-0 fs-2 fw-bold' style={{ outline: "none" }} />
      </div>

      <Container className='mt-3'>
        <Row>
          <Col>
            <p className='my-1'>Bank</p>
            <Form.Select aria-label="Default select example" className='border border-dark rounded-1'>
              <option>State Bank of India -68453489</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col>
            <p className='my-1'>Payment Type</p>
            <Form className='mt-2'>

              <Form.Check // prettier-ignore
                inline
                type="radio"
                name="paytype"
                id="upi"
                label="UPI"

              />
              <Form.Check // prettier-ignore
                inline
                type="radio"
                name="paytype"
                id='netbank'
                label="Net Banking"
              />
            </Form>
          </Col>
        </Row>
        <Stack className='mt-2'>
        <p className='my-1'>Your UPI ID Type</p>
        <Stack direction='horizontal' className='gap-2'>
          <Form.Control type="text" placeholder="upi@okicici" className=' border border-dark rounded-1'  />
          <Button variant='outline-recent' className=''>Verify</Button>
        </Stack>
        </Stack>
      </Container>
      <Button variant='primary' className='my-4 text-light rounded-1 w-100'>WITHDRAWFUND</Button>

    </div>

  )
}

export default AddFund
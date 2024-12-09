import React from 'react'
import { Button, Col, Container, Image, Row, Stack, } from 'react-bootstrap'
import AddFund from './AddFund'

const Content = () => {
    return (
        <Container fluid className='mt-3'>
            <Row>
                <Col xs={12} sm={6} >
                    <h3>Hi AbinJose</h3>
                    <h5 className='text-idColor'>AB11573571</h5>
                    <Stack className='border border-b_color p-2 my-3'>
                        <div className='d-flex justify-content-between'>
                            <p className='d-inline m-0 p-0'><Image src={require('../assets/wallet.png')} /> Funds</p>
                            <a href="recent" className='text-recent'>Recent Transactions</a>
                        </div>
                        <Container className='m-1'>
                            <Row className='mt-1'>
                                <Col className='pt-3 bg-b_color m-1'>
                                    <p>Available Margin</p>
                                    <h4 >₹70,000.00</h4>
                                </Col>
                                <Col className='pt-3 m-3'>
                                    <p>Margin used</p>
                                    <h4 >₹55,000.00</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='pt-3 m-3'>
                                    <p>Cash Margin</p>
                                    <h4 >₹1,25,000.00</h4>
                                </Col><Col className='pt-3 m-3'>
                                    <p>Turn Over</p>
                                    <h4 >₹1,12,000</h4>
                                </Col>
                            </Row>
                        </Container>
                    </Stack>

                    <Stack className='border border-b_color p-2 my-3'>
                        <Container className='m-1'>
                            <Row>
                                <Col className='p-2 m-1'>
                                    <p className='text-idColor'>Total Margin</p>
                                    <h5 >₹1,26,700.00</h5>
                                </Col>
                                <Col className='p-2 m-1'>
                                    <p className='text-idColor'>MTM(%)</p>
                                    <h5 >+24.95(1.12%)</h5>
                                </Col>
                                <Col className='p-2 m-1'>
                                    <p className='text-idColor'>Margin Used</p>
                                    <h5 >46.73%</h5>
                                </Col>
                            </Row>

                            <Row>
                                <Col className='p-2 m-1'>
                                    <p className='text-idColor'>Adhoc Margin</p>
                                    <h5 >₹70,000.00</h5>
                                </Col>
                                <Col className='p-2 m-1'>
                                    <p className='text-idColor'>Collateral</p>
                                    <h5 >₹62,500.00</h5>
                                </Col>
                                <Col className='p-2 m-1'>
                                    <p className='text-idColor'>Exposure Margin</p>
                                    <h5 >₹7,00,000.00</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='p-2 m-1'>
                                    <p className='text-idColor'>Span Margin</p>
                                    <h5 >₹0.00</h5>
                                </Col>
                                <Col className='p-2 m-1'>
                                    <p className='text-idColor'>Var Margin</p>
                                    <h5 >₹0.00</h5>
                                </Col>
                                <Col className='p-2 m-1'>
                                    <p className='text-idColor'>Premium Present</p>
                                    <h5 >₹3,000.00</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='p-2 m-1'>
                                    <p className='text-idColor'>Payin</p>
                                    <h5 >₹50,000.00</h5>
                                </Col>
                                <Col className='p-2 m-1'>
                                    <p className='text-idColor'>Payout</p>
                                    <h5 >₹0.00</h5>
                                </Col>
                                <Col className='p-2 m-1'>
                                </Col>

                            </Row>
                        </Container>
                    </Stack>
                    <Button variant='outline-danger' className='rounded-1 w-100'>WITHDRAWFUND</Button>
                </Col>
                <Col xs={12} sm={6} className='border border-b_color p-2'>
                    <AddFund />
                </Col>
            </Row>


        </Container>
    )
}

export default Content
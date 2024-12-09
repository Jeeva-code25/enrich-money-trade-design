import React from 'react'
import { Container, Form } from 'react-bootstrap'

const FundInboxes = ({name}) => {
  return (
    <Container>
        <Form>
        <Form.Check // prettier-ignore
            type="checkbox"
            id="equity"
            label={name}
          />
          <Form.Control type="number" placeholder="0.0" className='text-end mt-2 bg-inBg' />
        </Form>
    </Container>
  )
}

export default FundInboxes
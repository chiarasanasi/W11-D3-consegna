import { useState } from "react"
import { Container, Row, Col, Form, Spinner } from "react-bootstrap"
import Job from "./Job"

import { useSelector, useDispatch } from "react-redux"

const MainSearch = () => {
  const allJobs = useSelector((state) => {
    return state.mainResearch.jobs
  })

  const dispatch = useDispatch()

  const [query, setQuery] = useState("")

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search="

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20")
      if (response.ok) {
        const { data } = await response.json()
        console.log(data)
        dispatch({
          type: "ADD_JOBS",
          payload: data,
        })
        console.log("ALL_JOBS", allJobs)
      } else {
        alert("Error fetching results")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <a href="/" className="text-decoration-none text-reset display-1 ">
            Remote Jobs Search
          </a>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {allJobs
            ? allJobs.map((jobData) => <Job key={jobData._id} data={jobData} />)
            : ((<Spinner animation="border" variant="primary" />),
              console.log("ALL JOBS è VUOTO"))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch

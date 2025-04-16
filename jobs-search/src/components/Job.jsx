import { Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "bootstrap-icons/font/bootstrap-icons.css"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

const Job = ({ data }) => {
  const allLikedJobs = useSelector((state) => {
    return state.mainResearch.likedJobs
  })

  const dispatch = useDispatch()

  const [liked, setLiked] = useState(false)

  const handleLiked = () => {
    setLiked(!liked)
  }

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      {/* {console.log("DATA", data)} */}
      <Col xs={4}>
        <div className="d-flex flex-row align-items-center">
          <Button
            onClick={() => {
              handleLiked()
              dispatch({
                type: "ADD_TO_PREFE",
                payload: data,
              })
              {
                console.log(`DATA ${data.title}`, data)
              }
            }}
            className="rounded-5 px-2 py-1 me-3"
          >
            <i className={`bi ${liked ? "bi-star-fill" : "bi-star"}`}></i>
          </Button>
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </div>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  )
}

export default Job

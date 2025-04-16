import { Col, Row, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { FaTrash } from "react-icons/fa"

const Preferiti = () => {
  const preferiti = useSelector((state) => {
    return state.mainResearch.likedJobs
  })

  const dispatch = useDispatch()

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {preferiti.length === 0
            ? preferiti.map((job, i) => (
                <li key={i} className="my-4">
                  <Button
                    variant="danger"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_PREFERITI",
                        payload: i,
                      })
                    }}
                  >
                    <FaTrash />
                  </Button>
                  {job.company_name} | {job.title}
                </li>
              ))
            : console.log("non c'è niente nei preferiti")}
        </ul>
      </Col>
      <Row>
        <Col sm={12} className="fw-bold mb-3 ms-4">
          TOTALE:{" "}
          {preferiti.length === 0
            ? preferiti.reduce(
                (acc, currentValue) => acc + parseFloat(currentValue.price),
                0
              )
            : console.log("non c'è niente nei preferiti")}
          $
        </Col>
      </Row>
    </Row>
  )
}

export default Preferiti

import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux"

// useSelector serve per LEGGERE un valore dallo store!

const PrefeIndicator = () => {
  const navigate = useNavigate()

  // useSelector è un hook, segue le regole degli hooks
  const jobsLength = useSelector((state) => {
    return state.mainResearch.likedJobs.length
  })

  return (
    <div className="d-flex justify-content-end my-4">
      <Button
        onClick={() => navigate("/preferiti")}
        className="d-flex align-items-center"
      >
        <FaShoppingCart />
        <span className="ms-2">{jobsLength}</span>
      </Button>
    </div>
  )
}

export default PrefeIndicator

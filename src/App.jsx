import { Col, Row } from 'react-bootstrap'
import './App.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import Card from 'react-bootstrap/Card'

function App() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [bmiValue, setBmiValue] = useState(null) 
  const [bmiCategory, setBmiCategory] = useState("") 

  // Function to check BMI
  const checkBMI = () => {
    const parsedWeight = parseFloat(weight)
    const parsedHeight = parseFloat(height)

    if (isNaN(parsedWeight) || isNaN(parsedHeight) || parsedWeight <= 0 || parsedHeight <= 0) {
      alert("Please enter weight and height.")
      return
    }

    const heightInMeter = parsedHeight / 100
    const bmi = parsedWeight / (heightInMeter * heightInMeter)

    setBmiValue(bmi) 

    if (bmi < 18.5) {
      setBmiCategory("Underweight")
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setBmiCategory("Normal")
    } else if (bmi >= 25 && bmi < 29.9) {
      setBmiCategory("Overweight")
    } else {
      setBmiCategory("Obesity")
    }
  }

  // Function to reset all fields
  const resetFields = () => {
    setBmiCategory(""); // Reset BMI category
    setBmiValue(null); // Reset BMI value
    setWeight(""); // Reset weight input field
    setHeight(""); // Reset height input field
  }

  return (
    <>
      <div>
        <h2 className="text-center my-5 text-info">BMI Calculator</h2>
        <Row>
          <Col lg={4}></Col>
          <Col lg={4} sm={12}>
            <FloatingLabel controlId="floatingInput" label="Height(Cm)" className="mb-3">
              <Form.Control onChange={(e) => setHeight(e.target.value)} type="number" placeholder="Height" value={height} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Weight(Kg)">
              <Form.Control onChange={(e) => setWeight(e.target.value)} type="number" placeholder="Weight" value={weight} />
            </FloatingLabel>
            
            <div className="d-flex justify-content-center" style={{ marginTop: '30px' }}>
              <Button onClick={checkBMI} variant="primary" style={{ marginRight: '10px' }}>Check BMI</Button>
              {/* Reset button */}
              <Button onClick={resetFields} variant="secondary">Reset</Button>
            </div>

            {bmiValue && (
              <div style={{ marginTop: '50px' }}>
                {bmiCategory === "Normal" && (
                  <Card style={{ width: '100%' }}>
                    <Card.Body>
                      <Card.Title style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', color: 'green', fontWeight: '600' }}>Healthy</Card.Title>
                      <Card.Text style={{ color: 'green' }}>

                      Having a BMI in the normal range suggests that your body is functioning
                         optimally, but remember that BMI is just one measure of health. It's
                         important to consider other factors such as physical activity, diet, and
                         overall wellness for a complete picture of your health.

                      </Card.Text>
                    </Card.Body>
                  </Card>
                )}

                {bmiCategory === "Underweight" && (
                  <Card style={{ width: '100%' }}>
                    <Card.Body>
                      <Card.Title style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', color: 'red', fontWeight: '600' }}>Underweight</Card.Title>
                      <Card.Text style={{ color: 'red' }}>


                      Underweight BMI indicates that your weight is lower than what is
                         considered healthy for your height. This can increase the risk of
                         developing various health issues, including malnutrition, weakened immune
                         system, osteoporosis, and fertility problems.

                      </Card.Text>
                    </Card.Body>
                  </Card>
                )}

                {bmiCategory === "Overweight" && (
                  <Card style={{ width: '100%' }}>
                    <Card.Body>
                      <Card.Title style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', color: 'red', fontWeight: '600' }}>Overweight</Card.Title>
                      <Card.Text style={{ color: 'red' }}>

                      Overweight BMI means that your weight is higher than what is considered
                         healthy for your height. While being overweight may not necessarily mean
                         that you are unhealthy, it can increase the risk of developing several
                         health issues, such as heart disease, high blood pressure, type 2 diabetes,
                         and sleep apnea.

                      </Card.Text>
                    </Card.Body>
                  </Card>
                )}

                {bmiCategory === "Obesity" && (
                  <Card style={{ width: '100%' }}>
                    <Card.Body>
                      <Card.Title style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', color: 'red', fontWeight: '600' }}>Obesity</Card.Title>
                      <Card.Text style={{ color: 'red' }}>

                      Obesity BMI indicates that your weight is significantly higher than what
                         is considered healthy for your height. This can increase the risk of
                         serious health conditions, including heart disease, stroke, type 2 diabetes,
                           high blood pressure, sleep apnea, and certain cancers.


                      </Card.Text>
                    </Card.Body>
                  </Card>
                )}
              </div>
            )}
          </Col>
          <Col lg={4}></Col>
        </Row>
      </div>
    </>
  )
}

export default App


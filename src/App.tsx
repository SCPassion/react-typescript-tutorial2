import Button from "./components/Button"
import React from "react"

function App() {
  const icon = <i></i>
  const [count, setCount] = React.useState(0)
  console.log(count)
  function onClick() {
    alert("Button clicked")
  }

  return (
    <>
      <Button
        backgroundColor="red"
        fontSize={30}
        pillShape={true}
        textColor="purple"
        padding={[5, 10, 15, 20]}
        onClick={onClick}
        setCount={setCount}
      >
        <h1>hi</h1>
      </Button>
    </>
  )
}

export default App

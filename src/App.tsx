import Button from "./components/Button"
import React from "react"

function App() {
  const icon = <i></i>
  const [count, setCount] = React.useState(0)
  function onClick() {
    alert("Button clicked")
  }

  return (
    <>
      <Button<number>
        backgroundColor="red"
        fontSize={30}
        pillShape={true}
        textColor="purple"
        padding={[5, 10, 15, 20]}
        onClick={onClick}
        setCount={setCount}
        type="submit"
        autoFocus={true}
        defaultValue="test"
        className="test"
        countValue={5} // This should allow us to pass any type of valuue
        countHistory={[1, 2, 3]}
      >
        <h1>hi</h1>
      </Button>
    </>
  )
}

export default App

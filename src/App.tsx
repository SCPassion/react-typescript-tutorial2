import Button from "./components/Button"

function App() {
  const icon = <i></i>

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
      >
        <h1>hi</h1>
      </Button>
    </>
  )
}

export default App

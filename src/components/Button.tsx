import React from "react"

type Color = "red" | "blue" | "green" | "purple" // limited to these colors with union type

type ButtonProps = {
  //children: React.ReactNode; // this means it can be anything, but in this case it will be a string
  children: React.JSX.Element // only accept a single JSX element, more restrictive than React.ReactNode
  backgroundColor: Color // limited to these colors with union type
  textColor: Color // limited to these colors with union type
  fontSize: number
  pillShape?: boolean // optional prop
  padding: [number, number, number, number] // tuple type, this mean it must be an array of 4 numbers, this is a more specific array type
  onClick: (message: string) => void // function type, this mean it must be a function that returns void
  setCount: React.Dispatch<React.SetStateAction<number>>
  count?: number
}

// Intersecting
type SuperButton = ButtonProps & {
  size: "md" | "lg"
}

type ReactButtonProps = React.ComponentPropsWithoutRef<"button"> // This will automatically type all the props which are native to button html element

type User = {
  name: string
  age: number
}

export default function Button({
  backgroundColor,
  fontSize,
  pillShape,
  textColor,
  padding,
  onClick,
  children,
  setCount,
  count = 0,
  ...rest
}: ButtonProps & ReactButtonProps) {
  const ref = React.useRef<HTMLButtonElement>(null)

  const [number, setNumber] = React.useState(0)
  const [user, setUser] = React.useState<User | null>(null) // specifying type is needed for objects
  const name = user?.name

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => setCount((prev) => prev + 1)

  return (
    <button
      className="cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      onClick={handleClick}
      ref={ref}
      {...rest}
    >
      Click me
    </button>
  )
}

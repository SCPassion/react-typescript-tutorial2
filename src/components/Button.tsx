import React from "react"
import { type Color, type ButtonColor } from "./lib/types" // this will import the Color type from the lib/types file

//type Color = "red" | "blue" | "green" | "purple" // limited to these colors with union type

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
  id: number
}

type Guest = Omit<User, "name"> // this will remove the name property from the User type

const buttonTextOptions = [
  "Click me",
  "Click me again",
  "Click me one more time",
] as const // this is now a readonly array, editting is not allowed

function convertToArray<T>(value: T): T[] {
  // this should be able to accept any type of value, using generics
  return [value]
}

// convertToArray<number>(5)
// convertToArray<string>("5")

// This type will accept any type of value, and it will be an array of that type
// This is a generic type, this means it can be anything, but in this case it will be a number
// Since we have specified this relationship, we need to specify this function will use the same type, aka the react component function
type CountProps<T> = {
  countValue: T // These count values should be the same type
  countHistory: T[]
}

// Button component is a generic function because it needs to accept a type parameter for the CountProps to work
// Then, the CountProps will also take the <T> type parameter
export default function Button<T>({
  backgroundColor,
  fontSize,
  pillShape,
  textColor,
  padding,
  onClick,
  children,
  setCount,
  count = 0,
  countValue,
  countHistory,
  ...rest
}: ButtonProps & ReactButtonProps & CountProps<T>) {
  React.useEffect(() => {
    const previousButtonColor = localStorage.getItem(
      "buttonColor",
    ) as ButtonColor // this will get the button color from local storage and cast it to ButtonColor type
    // This to say, you know better than typescript, TS will cast the ouput to ButtonColor type
  }, [])

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
      {buttonTextOptions.map((option) => option)}
    </button>
  )
}

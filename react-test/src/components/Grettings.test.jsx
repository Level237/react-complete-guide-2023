import { render,screen } from "@testing-library/react"
import Grettings from "./Grettings"

describe('Greeting component', () => {
  test('renders Hello World as  a test', () => {
    //Arrange
  render(<Grettings/>)

  //Act


  //Assert
  const helloWorldElement=screen.getByText('Hello World!');
  expect(helloWorldElement).toBeInTheDocument();
})
})



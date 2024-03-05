import { render,screen } from "@testing-library/react"
import Grettings from "./Grettings"
import userEvent from "@testing-library/user-event"
describe('Greeting component', () => {
  test('renders Hello World as  a test', () => {
    //Arrange
  render(<Grettings/>)

  //Act


  //Assert
  const helloWorldElement=screen.getByText('Hello World!');
  expect(helloWorldElement).toBeInTheDocument();
})

test('renders good to see you if the button was not clicked',()=>{
  render(<Grettings/>);

  const outputElement=screen.getByText('Hello World!',{exact:false})
  expect(outputElement).toBeInTheDocument();
})

test('renders changed! if the button was clicked!',()=>{
  render(<Grettings/>)

  const buttonElement=screen.getByRole('button')
  userEvent.click(buttonElement)

  const outputElement=screen.getByText('Changed!');
  expect(outputElement).toBeInTheDocument();
})

test('does not render "good to see you" if the button was clicked',()=>{
  render(<Grettings/>)

  const buttonElement=screen.getByRole('button')
  userEvent.click(buttonElement)

  const outputElement=screen.queryByText('good to see you',{exact:false});
  expect(outputElement).toBeNull();
})
})



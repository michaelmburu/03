import { fireEvent, render } from "@testing-library/react"
import { CheckBox } from "./CheckBox"

test("Selecting checkbox should change value of checked to true", () => {
    const {getByLabelText} = render(<CheckBox />);
    const checkbox = getByLabelText(/not checked/i); // i = not case senstitve
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
});
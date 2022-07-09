import { useReducer } from "react";

export function CheckBox(){

    const [checked, setChecked] = useReducer(checked => !checked, false)
    return (
        <>
            <label>
                {checked ? "checked": "not checked"}
                <input type="checkbox" value={checked} onChange={setChecked} />
            </label>
        </>
    )
}
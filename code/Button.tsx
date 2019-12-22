import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import * as Tx from "trunx"

export function Button({ isPrimary, text, ...props }) {
    return (
        <Frame {...props}>
            <Tx.Button isPrimary={isPrimary}>{text}</Tx.Button>
        </Frame>
    )
}

Button.defaultProps = {
    isPrimary: false,
    text: "Click me",
}

addPropertyControls(Button, {
    isPrimary: {
        title: "Primary",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Hello Framer!",
    },
})

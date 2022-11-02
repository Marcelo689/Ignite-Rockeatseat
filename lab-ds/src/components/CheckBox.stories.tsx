import { CheckBox, CheckBoxProps } from "./CheckBox";
import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

export default {
    title: "Components/CheckBox",
    component: CheckBox,
    args: {
        children: "Create account",
    },
    argsTypes: {},
    decorators:[
        (Story) =>{
            return (
                <div className="flex items-center gap-2">
                    {Story()}
                    <Text size="sm">Lembrar-me de mim por 30 dias</Text> 
                </div>
            )
        }
    ],
} as Meta<CheckBoxProps>

export const Default : StoryObj<CheckBoxProps> = {}
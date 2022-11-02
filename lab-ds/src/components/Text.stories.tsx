import { Text, TextProps } from "./Text";
import  {Meta, StoryObj } from "@storybook/react";

export default {
    title: "Components/Text",
    component: Text,
    args: {
        children: "Testando Text",
        size: "md",
    },
    argsTypes: {
        size: {
           options:[ "sm", "md", "lg"],
           table:{ 
             disable: true,
             type: null,
           }
        }

    },
} as Meta<TextProps>

export const Default : StoryObj<TextProps> = {}

export const Small : StoryObj<TextProps> = {
    args:{
        size: "sm"
    }
}
export const Large : StoryObj<TextProps> = {
    args:{
        size: "lg"
    }
}
export const CustomComponent : StoryObj<TextProps> = {
    args:{
        asChild: true,
        children: (
            <p>Banana</p>
        )
    },
    argTypes:{
        children:{
            table:{
                disable: true,
            }
        },
        asChild:{
            table:{
                disable: true,
            }
        }
    }
}
import { Heading, HeadingProps } from "./Heading";
import  {Meta, StoryObj } from "@storybook/react";

export default {
    title: "Components/Heading",
    component: Heading,
    args: {
        children: "Testando Heading",
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
} as Meta<HeadingProps>

export const Default : StoryObj<HeadingProps> = {}

export const Small : StoryObj<HeadingProps> = {
    args:{
        size: "sm"
    }
}
export const Large : StoryObj<HeadingProps> = {
    args:{
        size: "lg"
    }
}
export const CustomComponent : StoryObj<HeadingProps> = {
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
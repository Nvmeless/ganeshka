import React from "react";

import {Accordion } from '../../components/molecules/Accordion/Accordion'
import {AccordionSummary } from '../../components/atoms/AccordionSummary/AccordionSummary'
import {AccordionDetails } from '../../components/atoms/AccordionDetails/AccordionDetails'

export default {
    title:"Molecules/Accordion",
    component: Accordion,
}

const Template = (args) => {
    <Accordion {...args}>
        <AccordionSummary>
            Titre
        </AccordionSummary>

        <AccordionDetails>
            Description du contenu de l'accordion 
        </AccordionDetails>
    </Accordion>
}
export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
}


import ToolTip from "../../components/atoms/ToolTip/ToolTip"

export default {
  title: "Atoms/ToolTip",
  component: ToolTip,
}

const Template = args => <ToolTip {...args} />

export const Red = Template.bind({})
Red.args = {
  backgroundColor: "blue",
  label: "Press Me",
  fleche : true,
}

// import React from "react";

// import { ToolTip } from "../../components/atoms/ToolTip/ToolTip";

// export default {
//   title: "Atoms/ToolTip",
//   component: ToolTip,
//   argType: {
//     backgroundColor: { control: "color" },
//   },
// };

// const Template = (args) => <ToolTip {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   loading: false,
// };


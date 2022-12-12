import React, { useState } from "react"
import { TransferList } from "../../components/molecules/transferList/TransferList"
import { useCheckList } from "../../hooks/useCheckList"
import { useArray } from "../../hooks/useArray"

export default {
  title: "Molecules/TransferList",
  component: TransferList,
  argType: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered'
  }
}

const Template = (args) => {
  const leftValue = args.leftValue ?? [0, 1, 2, 3]
  const rightValue = args.rightValue ?? [4, 5, 6, 7]
  const [checked, setChecked] = useState([]);
  const [left, setLeft] = useState(leftValue);
  const [right, setRight] = useState(rightValue);

  return <TransferList {...args} checked={checked} setChecked={setChecked} left={left} setLeft={setLeft} right={right} setRight={setRight} />
}

export const Default = Template.bind({})

export const WithCustomTitles = Template.bind({})
WithCustomTitles.args = {
  leftColumnTitle: "new left column title",
  rightColumnTitle: "new right column title",
}

export const WithCustomButtons = Template.bind({})
WithCustomButtons.args = {
  buttons: <button>i'm a custom button</button>,
}

export const WithCustomItem = Template.bind({})
WithCustomItem.args = {
  item: <div style={{ marginLeft: 20, display: 'flex', alignItems: 'center', height: '50px' }}>i'm a custom item</div>,
}

export const WithCustomColumn = Template.bind({})
WithCustomColumn.args = {
  leftColumn: <div>i'm a custom left column</div>,
  rightColumn: <div>i'm a custom right column</div>,
}

const TemplateWithCustomHandleToggleAll = (args) => {
  const leftValue = args.leftValue ?? [0, 1, 2, 3]
  const rightValue = args.rightValue ?? [4, 5, 6, 7]
  const [checked, setChecked] = useState([]);
  const [left, setLeft] = useState(leftValue);
  const [right, setRight] = useState(rightValue);
  const { not, union } = useArray()
  const { numberOfChecked } = useCheckList(setChecked, setLeft, setRight, checked, right, left)

  const handleToggleAll = (items) => () => {
    items = [...left, ...right]
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  return <TransferList {...args} handleToggleAll={handleToggleAll} checked={checked} setChecked={setChecked} left={left} setLeft={setLeft} right={right} setRight={setRight} />
}

export const WithCustomHandleToggleAll = TemplateWithCustomHandleToggleAll.bind({})

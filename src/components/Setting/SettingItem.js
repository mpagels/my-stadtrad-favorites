import styled from 'styled-components'
import { HiOutlineChevronRight } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'
import { useOpen } from '../../contenxt/ToggleContenxt'
export default function SettingItem({ title, children, id }) {
  const [isOpen, toggle] = useOpen(id)

  function handleOnClick() {
    toggle(id)
  }
  return (
    <Item>
      <Selection onClick={handleOnClick}>
        {title}
        {!isOpen.isOpen ? (
          <HiOutlineChevronRight size="1.4em" />
        ) : (
          <MdClose size="1.4em" />
        )}
      </Selection>
      {isOpen.isOpen && <Content>{children}</Content>}
    </Item>
  )
}

const Content = styled.section`
  font-weight: 400;
  font-size: 0.8em;
  margin: 10px 0 0 0;
`

const Item = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  color: #003063;
  padding: 15px;
  margin: 1px 0;
  font-weight: 500;

  &:nth-of-type(1) {
    border-radius: 15px 15px 0 0;
  }

  &:nth-last-of-type(1) {
    border-radius: 0 0 15px 15px;
  }
  &:only-of-type {
    border-radius: 15px;
  }
`

const Selection = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

import { useState } from "react";
import { theme } from "../style/Theme";
import { styled } from "styled-components";

const Dropdown = ({ setSelectedOption, selectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const selectList = ["전체보기", "치매", "아동", "장애인", "가출청소년"];

  return (
    <div>
      <Container isOpen={isOpen}>
        <div className="dropdown-header" onClick={toggleDropdown}>
          {selectedOption || "카테고리"}
          <span
            className={`arrow ${isOpen ? "open" : ""}`}
            style={{ float: "right" }}
          >
            {/* <img src="/images/dropdownArrow.png" alt="" /> */}
            <div>↓</div>
          </span>
        </div>
      </Container>
      {isOpen && (
        <Options>
          {selectList.map((item) => (
            // <Option value={item} key={item} onClick={() => {handleOptionSelect(item); navigate(`/selectPage/${item}`, {state:{content : item}})}} >
            <Option
              value={item}
              key={item}
              onClick={() => {
                handleOptionSelect(item);
              }}
            >
              {item}
            </Option>
          ))}
        </Options>
      )}
    </div>
  );
};

const Container = styled.div`
  width: 100px;
  height: 40px;
  background: ${theme.colors.gray100};
  color: ${theme.colors.gray600};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  ${(props) =>
    props.isOn
      ? `
    &:hover {
      color: black;
    }
  `
      : null}
`;

const Options = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 8px;
  border-radius: 6px;
  color: ${theme.colors.gray600};
  border: ${theme.colors.gray50} 3px solid;
  font-weight: 600;
  z-index: 20;
  background: white;
  position: absolute;
`;

const Option = styled.div`
  opacity: 0.8;
`;

export default Dropdown;

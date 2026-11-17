import styled from "styled-components";

const ButtonWrapper = styled.button`
  background: none;
  border: 1px solid transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }

  span {
    font-size: 14px;
    color: var(--momo-muted);
    font-weight: 500;
  }
`;

export { ButtonWrapper };

import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  padding: 0 var(--content-padding);
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
`;

export const Menu = () => {};

Menu.Toggle = styled.button`
  background: transparent;
  position: relative;
  border: none;
  width: 30px;
  height: 30px;

  :before,
  :after {
    left: 0;
    width: 100%;
    height: 1px;
    background: #fff;
    content: ' ';
    position: absolute;
    color: var(--color-white);
    transition: 0.3s ease-in-out;
  }

  :before {
    top: 30%;
  }

  :after {
    bottom: 30%;
  }

  ${(props) =>
    props['aria-expanded'] &&
    css`
      :before,
      :after {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }

      :after {
        transform: translate(-50%, -50%) rotate(135deg);
      }
    `}
`;

import styled from 'styled-components';

export const HeaderStyled = styled.nav`
  @keyframes headerMenuOut {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(100%);
    }
  }

  @keyframes headerMenuIn {
    from {
      margin-left: 100%;
    }
    to {
      margin-left: 0%;
    }
  }

  .mountedStyle {
    animation: headerMenuIn 0.3s linear;
  }

  .unMountedStyle {
    animation: headerMenuOut 0.3s linear;
  }
`;

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const UserNameWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

export const NavigationLink = styled(Link)`
  color: #000;
  background-color: #fff;
  cursor: pointer;
`;

import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';

export const Wrapper = styled.div`
  margin: 0 20px;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  float: right;
  z-index: 100;
  right: 20px;
  top: 20px;
`;

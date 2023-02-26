import { StyledNav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledNav to="/">Home</StyledNav>
        </li>
        <li>
          <StyledNav to="add">Add</StyledNav>
        </li>
      </ul>
    </nav>
  );
};

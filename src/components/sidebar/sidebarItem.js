import styled from "styled-components";
import Link from "next/link";

const SidebarItemContainer = styled.div`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  padding: 10px 0;
  :hover {
    background-color: #121244;
  }
`;

function SidebarItem({ title, link }) {
  return (
    <Link href={link} passHref>
      <SidebarItemContainer>{title}</SidebarItemContainer>
    </Link>
  );
}

export default SidebarItem;

import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/16/solid";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { PAGE } from "src/constants/router";
import { authActions, useAppDispatch } from "src/store";
function NavBar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(authActions.logout());
    navigate(PAGE.LOGIN);
  };
  return (
    <Navbar>
      <NavbarBrand className="flex gap-1">
        <p className="font-bold text-inherit">ChatBot</p>
        <ChatBubbleLeftEllipsisIcon className="size-5" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href={PAGE.SITEMAP}>
            Sitemap
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href={PAGE.CRAWL_DATA} aria-current="page">
            Crawl Data
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href={PAGE.CHAT_BOT}>
            ChatBot
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button color="primary" onClick={logout}>
            Logout
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavBar;

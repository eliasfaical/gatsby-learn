import React from "react"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLink from "../MenuLink"

import * as S from "./styled"

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLink />
  </S.SidebarWrapper>
)

export default Sidebar
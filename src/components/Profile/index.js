import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"
import Avatar from "../Avatar"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description, skills },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
          skills
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>{title}</S.ProfileAuthor>
        <S.ProfilePosition>{position}</S.ProfilePosition>
        <S.ProfileDescription>{description}</S.ProfileDescription>
        <S.ProfileSkills>{skills}</S.ProfileSkills>
      </S.ProfileLink>
    </S.ProfileWrapper>
  )
}

export default Profile

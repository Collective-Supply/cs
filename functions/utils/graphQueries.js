const GET_PROFILE_BY_SHARE_LINK_URL = `
  query($url: String!) {
    share_link_by_url(url: $url) {
      _id
      profile {
        job_title
        years_of_exp
        owner {
          name
          picture
          email
        }
      }
    }
  } 
`;

const GET_USER_BY_SUB = `
  query($sub: String!) {
    user_by_sub(sub: $sub) {
    name
    profiles {
      data {
        _id
        share_links {
          data {
            link_name
            job_link
            url
            active
            _ts
            _id
            view_sessions {
              data {
                _ts
                _id
                viewer {
                  name
                  picture
                  _id
                  _ts
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

const GET_USER_ID_BY_SUB = `
  query($sub: String!) {
    user_by_sub(sub: $sub) {
      _id
    }
  }
`;

const GET_PROFILE_ID_BY_SUB = `
  query($sub: String!) {
    user_by_sub(sub: $sub) {
      profiles {
        data {
          _id
        }
      }
    }
  }
`;

const GET_VIEW_SESSIONS_BY_SHARE_LINK_URL =`
  query($url: String!) {
    share_link_by_url(url: $url) {
      _id
      view_sessions {
        data {
          _id
          _ts
          viewer {
            name
            picture
            _id
            _ts
          }
        }
      }
    }
  }
`;

const CREATE_USER = `
  mutation(
    $given_name: String, 
    $family_name: String, 
    $nickname: String, 
    $name: String, 
    $picture: String, 
    $updated_at: String, 
    $email: String, 
    $emailed_verified: Boolean, 
    $sub: String!) {
    
    createUser(
      data: {
        given_name: $given_name,
        family_name: $family_name,
        nickname: $nickname,
        name: $name,
        picture: $picture,
        updated_at: $updated_at,
        email: $email,
        emailed_verified: $emailed_verified,
        sub: $sub
      }
    ) {
      _id
      _ts
      name
      sub
    }
  }
`;

// The connect: "" part is going to be tough, have to figure that out... it was originally "profile: { connect: "2387283" }""
const CREATE_SHARE_LINK = `
  mutation($profile: ID!, $link_name: String, $job_link: String, $url: String, $active: Boolean) {
    createShare_link(
      data: {
        profile: { connect: $profile }
        link_name: $link_name
        job_link: $job_link
        url: $url
        active: $active
      }
    ) {
      _id
      _ts
    }
  }
`;

const CREATE_VIEW_SESSION = `
  mutation($share_link: ID!, $viewer: ID! ){
    createView_session(
      data: {
        share_link: { connect: $share_link }
        viewer: { connect: $viewer }
      }
    ) {
      _id
      _ts
      share_link {
        link_name
        url
        profile {
          profile_name
          owner {
            name
            sub
          }
        }
      }
      viewer {
        name
      }
    }
  }
`

const UPDATE_USER = `
  mutation(
    $id: ID!, 
    $given_name: String, 
    $family_name: String, 
    $nickname: String, 
    $name: String, 
    $picture: String, 
    $updated_at: String, 
    $email: String, 
    $emailed_verified: Boolean, 
    $sub: String) {
    
    updateUser(
      id: $id
      data: {
        given_name: $given_name
        family_name: $family_name
        nickname: $nickname
        name: $name
        picture: $picture
        updated_at: $updated_at
        email: $email
        emailed_verified: $emailed_verified
        sub: $sub
      }
    ) {
      _id
      _ts
      name
      sub
    }
  }
`;

const TOGGLE_SHARE_LINK_INACTIVE = `
  mutation($id: ID!) {
    updateShare_link(id: $id, data: { active: false }) {
      _id
      _ts
      link_name
      job_link
      url
      active
    }
  }
`;

const TOGGLE_SHARE_LINK_ACTIVE = `
  mutation($id: ID!) {
    updateShare_link(id: $id, data: { active: true }) {
      _id
      _ts
      link_name
      job_link
      url
      active
    }
  }
`;

const DELETE_VIEW_SESSION = `
  mutation($id: ID!) {
    deleteView_session(id: $id) {
      _id
      _ts
    }
  }
`
const DELETE_SHARE_LINK = `
  mutation($id: ID!) {
    deleteShare_link(id: $id) {
      _id
      _ts
    }
  }
`

module.exports = {
    GET_PROFILE_BY_SHARE_LINK_URL,
    GET_USER_BY_SUB,
    GET_USER_ID_BY_SUB,
    GET_PROFILE_ID_BY_SUB,
    GET_VIEW_SESSIONS_BY_SHARE_LINK_URL,
    CREATE_USER,
    CREATE_SHARE_LINK,
    CREATE_VIEW_SESSION,
    UPDATE_USER,
    TOGGLE_SHARE_LINK_INACTIVE,
    TOGGLE_SHARE_LINK_ACTIVE,
    DELETE_VIEW_SESSION,
    DELETE_SHARE_LINK,
};
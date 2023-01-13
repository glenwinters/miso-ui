import React from "react";
import { useAuth0, Auth0ContextInterface, User} from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading }: Auth0ContextInterface<User> = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user?.picture} alt={user?.name} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </div>
    )
  );
};

export default Profile;
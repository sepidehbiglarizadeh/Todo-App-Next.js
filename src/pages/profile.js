import { signIn, useSession } from "next-auth/react";

const Profile = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  if (status === "loading") {
    return <div className="text-center mt-6">Loading...</div>;
  }

  return <h1 className="text-center mt-6">{session.user.name} Profile Page</h1>;
};

export default Profile;

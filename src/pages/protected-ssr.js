import { getSession, useSession } from "next-auth/react";

const ProtectedSSR = () => {
  const { data: session, status } = useSession();

  return (
    <h1 className="text-center mt-6">
      {session.user.name} Welcome to Protected Page
    </h1>
  );
};

export default ProtectedSSR;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination:
          "/api/auth/signin?callbackUrl=https://todo-app-next-js-spdb-4rvtrcqlv-sepidehbiglarizadeh.vercel.app/protected-ssr",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

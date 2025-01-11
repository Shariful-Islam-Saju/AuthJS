import { auth as middleware } from "../auth";

export default middleware((req) => {
  const isLoggedIn = !!req.auth;
  console.log(req.nextUrl.pathname);
});

export const config = {
  matcher: ["/((?!_next).*)"],
};


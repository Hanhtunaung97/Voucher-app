import { lazy } from "react";

const UserProfileLayOut = lazy(() =>
  import("../modules/profile/components/UserProfileLayOut")
);
const UserProfileChangeImagePage = lazy(() =>
  import("../modules/profile/pages/UserProfileChangeImagePage")
);
const UserProfileChangeNamePage = lazy(() =>
  import("../modules/profile/pages/UserProfileChangeNamePage")
);
const UserProfileChangePasswordPage = lazy(() =>
  import("../modules/profile/pages/UserProfileChangePasswordPage")
);
const UserProfilePage = lazy(() =>
  import("../modules/profile/pages/UserProfilePage")
);

const userProfileRoute = [
  {
    path: "user-profile",
    element: <UserProfileLayOut />,
    children: [
      {
        index: true,
        element: <UserProfilePage />,
      },
      {
        path: "change-name",
        element: <UserProfileChangeNamePage />,
      },
      {
        path: "change-image",
        element: <UserProfileChangeImagePage />,
      },
      {
        path: "change-password",
        element: <UserProfileChangePasswordPage />,
      },
    ],
  },
];
export default userProfileRoute;

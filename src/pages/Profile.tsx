import { Route, Routes } from "react-router-dom";
import { AccountMenu } from "../components/AccountMenu";
import { UserProfile } from "../components/UserProfile";
import { CreatePost } from "../components/CreatePost";
import { UserPosts } from "../components/UserPosts";
import { NotFound } from "../components/Helper/NotFound";

export function Profile() {
  return (
    <main className="max-w-[1000px] min-h-screen h-full mx-auto my-0 flex-grow">
      <div className="w-full h-full flex justify-between items-center px-2 py-2 mt-5 mb-10">
        <AccountMenu />
      </div>
      <section className="w-full h-full">
        <Routes>
          <Route path="" element={<UserProfile />} />
          <Route path="userposts" element={<UserPosts />} />
          <Route path="createpost" element={<CreatePost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
    </main>
  );
}

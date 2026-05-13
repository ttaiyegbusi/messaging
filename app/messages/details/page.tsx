import { redirect } from "next/navigation";

export default function DetailsIndex() {
  redirect("/messages/details/user-info");
}

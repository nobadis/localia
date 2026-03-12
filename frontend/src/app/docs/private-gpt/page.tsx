import { redirect } from "next/navigation";

export default function PrivateGptRedirect() {
  redirect("/docs/localia");
}

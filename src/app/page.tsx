import LoginButton from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: "600",
});
export default function Home() {
  return (
    <>
      <div className="space-y-6">
        <h1
          className={cn(
            "text-6xl font-semibold drop-shadow-lg text-white",
            font.className
          )}
        >
          Auth
        </h1>
        <p className="text-white text-lg">A simple Authentication Service</p>
        <LoginButton mode="redirect">
          <Button variant={"secondary"} size={"lg"}>
            Sign in
          </Button>
        </LoginButton>
      </div>
    </>
  );
}

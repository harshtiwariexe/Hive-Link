import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignInFlow } from "../type";

interface SignInCardProp {
  setState: (type: SignInFlow) => void;
}

export const SignUpCard = ({ setState }: SignInCardProp) => {
  return (
    <Card className="h-full w-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Use your email</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 pb-0 px-0">
        <form action="post" className="space-y-2.5">
          <Input
            disabled={false}
            value=""
            onChange={() => {}}
            placeholder="Email"
            type="email"
            aria-label="Email"
            required
          />
          <Input
            disabled={false}
            value=""
            onChange={() => {}}
            placeholder="Password"
            type="password"
            aria-label="Password"
            required
          />
          <Input
            disabled={false}
            value=""
            onChange={() => {}}
            placeholder="Confirm Your Password"
            type="password"
            aria-label="Password"
            required
          />

          <Button
            className="w-full"
            type="submit"
            size="lg"
            onClick={(e) => {
              e.preventDefault();
              console.log("Sign In clicked");
            }}
          >
            Sign Up
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button
            disabled={true}
            variant="outline"
            className="relative w-full"
            onClick={() => {
              console.log("Google Sign-In clicked");
            }}
          >
            <FcGoogle className="size-5 absolute top-2.5 left-2.5" />
            Continue with Google
          </Button>
          <Button
            disabled={true}
            variant="outline"
            className="relative w-full"
            onClick={() => {
              console.log("GitHub Sign-In clicked");
            }}
          >
            <FaGithub className="size-5 absolute top-2.5 left-2.5" />
            Continue with Github
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Already have an account?{" "}
          <span
            className="text-sky-700 hover:underline cursor-pointer"
            role="button"
            onClick={() => setState("signIn")}
          >
            Sign In
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

"use client";

import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import SignIn from "./components/signIn";
import GetCode from "./components/getCode";
import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [getCodeSent, setGetCodeSent] = useState(false);
  const user = useAppSelector((state) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user])
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        height: "100dvh",
      }}
    >
      <Box
        sx={{
          width: "40%",
        }}
        className="hidden md:block"
      >
        <img
          src="/auth.png"
          alt="klinit"
          width={"100%"}
          className="object-cover h-screen"
        />
      </Box>
      <Box
        sx={{
          width: "60%",
          height: "100%",
        }}
        className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              className="sm:mx-auto sm:w-full"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src="/logo.png" alt="klinit" width={80} height={40} />
              <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Acceder a mi cuenta
              </h2>
            </Grid>
            {getCodeSent ? (
              <SignIn />
            ) : (
              <GetCode setGetCodeSent={setGetCodeSent} />
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

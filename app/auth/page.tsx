'use client'

import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { useState } from 'react'

export default function AuthPage() {
  const [getCodeSent, setGetCodeSent] = useState(false)
  return (
    <Box
      className="h-screen"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        height: "100vh",
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
      {
        getCodeSent ? signIn() : getCode()
      }
    </Box>
  );

  function getCode() {
    return (
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
            <Grid item sx={{ width: "100%" }} className="sm:mx-auto sm:w-1/2">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  width: "100%",
                  padding: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      width: "100%",
                    }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neutral-600 sm:text-sm sm:leading-6"
                      autoComplete="email"
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    width: "100%",
                  }}
                >
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-neutral-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
                    onClick={() => setGetCodeSent(true)}
                  >
                    Enviar código
                  </button>
                  <button
                    type="button"
                    className="flex w-full justify-center rounded-md bg-neutral-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
                  >
                    Registrarse
                  </button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }

  function signIn() {
    return (
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
            <Grid item sx={{ width: "100%" }} className="sm:mx-auto sm:w-1/2">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  width: "100%",
                  padding: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      width: "100%",
                    }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Introduce el código enviado a tu correo
                    </label>
                    <input
                      type="number"
                      id="code"
                      name="code"
                      required
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neutral-600 sm:text-sm sm:leading-6"
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    width: "100%",
                  }}
                >
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-neutral-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
                  >
                    Acceder
                  </button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}

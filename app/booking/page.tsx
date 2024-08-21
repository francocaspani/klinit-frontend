"use client";

import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import Services from "./components/services";

export enum ServiceType {
  COMMERCIAL = "commercial",
  RESIDENTIAL = "residential",
}

export default function Booking() {
  const [typeServiceSelected, setTypeServiceSelected] = useState(
    null as ServiceType | null
  );

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
          width: "60%",
          height: "100%",
        }}
        className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8"
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
            width= "100%"
          >
            <Grid
              item
              className="sm:mx-auto sm:w-full"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Image src="/logo.png" alt="klinit" width={80} height={40} />
              <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                {typeServiceSelected === null
                  ? "Selecciona el tipo de servicio que necesitas"
                  : typeServiceSelected === ServiceType.COMMERCIAL
                  ? "Como podemos ayudarte con tu negocio?"
                  : "Como podemos ayudarte en tu hogar?"}
              </h2>
            </Grid>
            {typeServiceSelected === null && <Services setTypeServiceSelected={setTypeServiceSelected}/>}
          </Grid>
        </Box>
      </Box>
      {typeServiceSelected != null &&
        (typeServiceSelected === ServiceType.COMMERCIAL ? (
          <Box
            sx={{
              width: "40%",
            }}
            className="hidden md:block"
          >
            <img
              src="/commercial.png"
              alt="klinit"
              width={"100%"}
              className="object-cover h-screen"
            />
          </Box>
        ) : (
          <Box
            sx={{
              width: "40%",
            }}
            className="hidden md:block"
          >
            <img
              src="/residential.png"
              alt="klinit"
              width={"100%"}
              className="object-cover h-screen"
            />
          </Box>
        ))}
    </Box>
  );
}

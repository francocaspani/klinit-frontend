import { Box, Button, Grid, Tooltip } from "@mui/material";
import { use, useEffect, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

export default function SignIn() {
  const [code, setCode] = useState(Array(6).fill(null));
  const [loading, setLoading] = useState(true);
  console.log(code);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 30000);
  }, []);

  return (
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
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <label
              htmlFor="code"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Introduce el código enviado a tu correo
            </label>
            <div className="flex space-x-2 justify-center">
              {code.map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="w-10 h-10 text-center border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-neutral-600"
                  value={code[index]}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (isNaN(Number(value))) return;
                    setCode((prev) => {
                      const next = [...prev];
                      next[index] = value;
                      return next;
                    });
                  }}
                />
              ))}
            </div>
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
          <Button
            sx={{ textTransform: "none" }}
            type="submit"
            className="flex w-full justify-center rounded-md bg-neutral-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
          >
            Acceder
          </Button>
          <LoadingButton
            loading={loading}
            loadingPosition="end"
            variant="contained"
            className="flex w-full justify-center rounded-md bg-neutral-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
            sx={{ textTransform: "none" }}
          >
            <span>Enviar nuevo código</span>
          </LoadingButton>
          <p className="text-sm text-gray-900 flex">
            ¿No has recibido el código?{" "}
            <Tooltip
              title="Revisa tu bandeja de correo no deseado, si no encuentras el correo, haz clic en enviar un nuevo código."
              placement="bottom"
            >
              <InformationCircleIcon className="h-5 w-5 text-gray-900 ml-2 cursor-pointer" />
            </Tooltip>
          </p>
        </Box>
      </Box>
    </Grid>
  );
}

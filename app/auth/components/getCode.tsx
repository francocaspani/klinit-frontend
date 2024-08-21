import { LoadingButton } from "@mui/lab";
import { Box, Button, Grid } from "@mui/material";
import { useState } from "react";
import { getCode } from "../actions/auth";
import { useFormState } from "react-dom";

export default function GetCode({
  setGetCodeSent,
}: {
  setGetCodeSent: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [loading, setLoading] = useState(false);
  const [state, action, pending] = useFormState(getCode, undefined)
  console.log(state);
  
  return (
    <Grid item sx={{ width: "100%" }} className="sm:mx-auto sm:w-1/2">
      <form action={action}>
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
              {state?.errors?.email && <p>{state.errors.email}</p>}
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
            <LoadingButton
              loading={pending}
              loadingPosition="end"
              sx={{ textTransform: "none" }}
              type="submit"
              className="flex w-full justify-center rounded-md bg-neutral-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
              //onClick={() => setGetCodeSent(true)}
            >
              Enviar código
            </LoadingButton>
            <button
              type="button"
              className="flex w-full justify-center rounded-md bg-neutral-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
            >
              Registrarse
            </button>
          </Box>
        </Box>
      </form>
    </Grid>
  );
}

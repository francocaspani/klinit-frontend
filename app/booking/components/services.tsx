import { Grid } from "@mui/material";
import { ServiceType } from "../page";

export default function Services( { setTypeServiceSelected } : { setTypeServiceSelected: React.Dispatch<React.SetStateAction<ServiceType | null>> }) {
  const callouts = [
    {
      name: "Comercial",
      imageSrc: "/commercial.png",
      imageAlt: "Comercial",
    },
    {
      name: "Residencial",
      imageSrc: "/residential.png",
      imageAlt: "Residential",
    },
  ];

  return (
    <Grid item sx={{ width: "100%" }} className="sm:mx-auto sm:w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-4 sm:py-4 lg:max-w-none lg:py-8">
          <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-x-28 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-44 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  <a 
                  onClick={() => setTypeServiceSelected(callout.name === "Comercial" ? ServiceType.COMMERCIAL : ServiceType.RESIDENTIAL)}
                  >
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Grid>
  );
}

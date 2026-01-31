import { Backdrop, CircularProgress } from "@mui/material";
import { useLoading } from "../contexts/LoadingContext";

export default function GlobalLoader() {
  const { loading } = useLoading();

  return (
    <>
      {/* LOADER */}
      <Backdrop
        open={loading}
        sx={{
          color: "#fff",
          zIndex: 1000,
        }}
      >
        <CircularProgress sx={{ color: "inherit" }} />
      </Backdrop>
      {/*=== LOADER ===*/}
    </>
  );
}

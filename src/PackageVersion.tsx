import React, { useEffect, useState } from "react";

export default function PackageVersion({ packageName }: { packageName: string }) {
  const [version, setVersion] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchVersion(pkgName: string) {
      const res = await fetch(`https://registry.npmjs.org/${pkgName}/latest`);

      if (!res.ok) {
        try{
          const errorData = await res.json();
          setError(errorData);
          setVersion('');
        } catch {
          console.error(`We found an error when parsing information for ${pkgName}`)
        }
      } else {
        const data = await res.json();
        setVersion(data.version);
        setError("");
      }
    }
    fetchVersion(packageName);
  }, [packageName]);

  return (
    <div
    //   style={{
    //     backgroundColor: "black",
    //     color: "white",
    //     padding: "10px",
    //     borderRadius: "5px",
    //     marginTop: "10px",
    //   }}
    >
      {error ? `Error: ${error}` : `(${version || "Loading..."})`}
    </div>
  );
};

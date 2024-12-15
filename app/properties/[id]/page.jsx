"use client";
import { useRouter, useParams, useSearchParams, usePathname } from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  console.log(router); // back, refresh, forward, push, replace, hmrRefresh, prefetch

  const params = useParams();
  console.log(params);

  const searchParams = useSearchParams();
  console.log(searchParams); //ReadonlyURLSearchParams {size: 2} size:2
  // url: http://localhost:3000/properties/102323?name=sofie&age=22

  const pathname = usePathname();
  console.log(pathname); // /properties/102323

  return (
    <div>
      <button onClick={() => router.replace("/")}>Go Home</button>
      <h5>Params {params.id}</h5>
      <h4>Search Params {searchParams.get("name")}</h4>
      <h4>Search Params {searchParams.get("age")}</h4>
      <h4>Path Name {pathname}</h4>
    </div>
  );
};

export default PropertyPage;

import { useEffect, useState } from "react";
import useStore from "../stores/store";

export function useCountHandler() {
  const { data } = useStore((state) => state);
  const [cities, setCities] = useState<
    {
      city: string;
      count: number;
    }[]
  >([]);

  useEffect(() => {
    function x() {
      const addresses = data.map((item) => item.address);
      let cities: { city: string; count: number }[] = [];

      addresses.forEach((address) => {
        if (
          cities.some((val: { city: string; count: number }) => {
            return val["city"] === address["city"];
          })
        ) {
          cities.forEach((k: { city: string; count: number }) => {
            if (k["city"] === address["city"]) {
              k["count"]++;
            }
          });
        } else {
          let a: { city: string; count: number } = { city: "", count: 0 };
          a["city"] = address["city"];
          a["count"] = 1;
          cities.push(a);
        }
      });

      setCities(cities);
      return cities;
    }
    x();
  }, [data]);

  return cities;
}

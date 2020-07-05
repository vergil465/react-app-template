import { useLocation } from "react-router-dom";

export default function useQuery(param) {
  return new URLSearchParams(useLocation().search).get(param);
}

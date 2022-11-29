import { useContext } from "react";
import { Context as NavToggleContext} from "../components/context/NavToggleContext";

export const useNavToggle = () => useContext(NavToggleContext)
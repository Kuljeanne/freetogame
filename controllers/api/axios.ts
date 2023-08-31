import axios from "axios";
import { FREE_TO_GAME_BASE_URL } from "../../constants";

export default axios.create({
  baseURL: FREE_TO_GAME_BASE_URL,
});

import { useNavigation } from "react-router-dom";

function useIsLoading() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return isLoading;
}

export default useIsLoading;

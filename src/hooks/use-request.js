import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRequestStatus } from "../redux/ui/request/selectors";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const useRequest = (thunk, ...params) => {
  const [request, setRequest] = useState();
  const status = useSelector((state) =>
    selectRequestStatus(state, request?.requestId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const request = dispatch(thunk(...params));
    setRequest(request);

    return () => request.abort();
  }, [dispatch, thunk, ...params]);

  return status;
};

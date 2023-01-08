import { useEffect, useState } from "react";
import * as Realm from "realm-web";

export function useApp() {
  const [app, setApp] = useState<Realm.App>();
  // Run in useEffect so that App is not created in server-side environment
  useEffect(() => {
    setApp(Realm.getApp(String(process.env.NEXT_PUBLIC_APP_ID)));
  }, []);
  return app;
}
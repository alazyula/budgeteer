import { usePathname } from "expo-router";

export default function useRouteParameter(){
    const pathname = usePathname();
    const id = pathname?.substring(pathname.lastIndexOf('/')+1);
    return id;
}
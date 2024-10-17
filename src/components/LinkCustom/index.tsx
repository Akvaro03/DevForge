import Link from "next/link";
import { ReactElement } from "react";
import { usePathname } from "next/navigation";

// function LinkCustom({ url, tittle, icon, onClick }: { url: string, tittle: string, icon?: ReactElement, onClick?: () => void }) {
function LinkCustom({
  url,
  children,
}: {
  url: string;
  children: ReactElement;
}) {
  const pathName = usePathname();
  return (
    <Link
      style={
        url === pathName
          ? {
              color: "var(--first-theme)",
              background: "linear-gradient(135deg, #1d1f21, #333)",
              borderRadius: "10px",
            }
          : undefined
      }
      href={url}
    >
      {children}
    </Link>
  );
}
export default LinkCustom;

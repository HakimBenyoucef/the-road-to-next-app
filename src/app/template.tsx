import { RedirectToast } from "@/components/redirect-toast";

type RootTemplateProps = { children: React.ReactNode };

export default function Template({ children }: RootTemplateProps) {
  console.log("template");
  return (
    <>
      <div>{children}</div>
      <div>
        <RedirectToast />
      </div>
    </>
  );
}

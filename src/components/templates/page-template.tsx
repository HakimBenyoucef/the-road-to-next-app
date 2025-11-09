import PageHeader from "@/components/layout/heading";

interface PageTemplateProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  showSeparator?: boolean;
  headerClassName?: string;
}

export default function PageTemplate({
  title,
  description,
  children,
  headerClassName,
}: PageTemplateProps) {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <PageHeader
        title={title}
        description={description}
        className={headerClassName}
      />
      {children}
    </div>
  );
}

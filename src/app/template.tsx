type RootTemplateProps = { children: React.ReactNode }
    
export default function Template({ children }: RootTemplateProps) {
  return <div>{children}</div>
}
export default async function MainLayout({ children }): Promise<Element> {
  return (
    <div>
      main Layout
      {children}
    </div>
  );
}

import Header from "./Header";

const Layout = ({children}) => {
  return ( 
    <div className="min-h-screen main-background bg-slate-50">
      <Header/>
      {children}
    </div>
   );
}
 
export default Layout;
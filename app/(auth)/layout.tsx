const AuthLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="flex items-center justify-center h-full bg-teal-700">{children}</div>
     );
}
 
export default AuthLayout;
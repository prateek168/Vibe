interface Props{
    children : React.ReactNode
}



const Layout = ({children}:Props) =>{
    return(
        <main className="flex flex-col min-h-screen max-h-screen">
            <div className="absolute inset-0 -z-10 h-full bg-background dark:bg-[radial-gradient()]----" />
            <div className="flex-1 flex flex-col px-4 pb-4">
                {children}
            </div>
        </main>
    )
}
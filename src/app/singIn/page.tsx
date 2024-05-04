import HeaderComponent from "@/components/HeaderComponent";
import SignIn from "@/components/SignIn";

function SingInPage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-8">
            <HeaderComponent />
            <div className="flex items-center justify-center h-[80vh]">
                <SignIn />
            </div>
        </main>
    );
}

export default SingInPage;
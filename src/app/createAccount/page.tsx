"use client"

import HeaderComponent from "@/components/HeaderComponent";
import FormUser from "@/template/formUser";
import FormUserData from "@/types/FormUserData";

function LoginPage() {
    const handleSubmit = (data: FormUserData) => {
        console.log(data)
    }

    return (
        <main className="flex min-h-screen flex-col items-center p-8">
            <HeaderComponent />
            <div className="flex items-center justify-center h-[80vh]">
                <FormUser
                    type="createAccount"
                    onSubmit={handleSubmit}
                    tittleComponent={<><span className="resalt">Create</span> Account</>}
                />
            </div>
        </main>
    );
}

export default LoginPage;
import prismadb from "@/lib/prismadb";
import { auth, redirectToSignIn } from "@clerk/nextjs";

import { CompanionForm } from "./components/companion-form";

interface CompanionIdPageProps {
    params: {
        companionId: string;  //this companionId id in params and in the folder name should be the same in [companionId]
    }
}

const CompanionIdPage = async ({
    params
}: CompanionIdPageProps) => {

    const { userId } = auth(); 

    //TODO: Check suscription

    if(!userId) {
        return redirectToSignIn();
    }

    const companion = await prismadb.companion.findUnique({
        where: {
            id: params.companionId,
            userId,
        }
    })

    const categories = await prismadb.category.findMany();

    return (
        <CompanionForm
            initialData={companion}
            categories={categories}
        />

    );
}

export default CompanionIdPage;
"use client";

import { useRouter } from "next/navigation";
import Button from "@/ui/Button/Button";

export default function OnboardingPage() {
    const router = useRouter();

    return (
        <div>
            <h2>Start Onboarding</h2>

            <Button
                value='Go to step 1'
                onClick={() => {
                    router.replace("/onboarding/step-one");
                }}
            />
            <Button
                value='Skip Onboarding'
                onClick={() => {
                    router.push("/products");
                }}
            />
        </div>
    );
}

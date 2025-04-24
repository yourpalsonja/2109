"use client";

import { useRouter } from "next/navigation";
import Button from "@/ui/Button/Button";

export default function OnboardingStepOne() {
    const funkyChicken = useRouter();

    return (
        <div>
            <h2>Onboarding Step 1</h2>

            <Button
                value='Go to step 2'
                onClick={() => {
                    funkyChicken.replace("/onboarding/step-two");
                }}
            />
        </div>
    );
}

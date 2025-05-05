"use client";

import { useState } from "react";
import Button from "@/components/Button/Button";

let onboardingContent = [
    "This is onboarding step one content",
    "This is onboarding step two content",
    "You're done onboading",
];

export default function OnboardingPage() {
    const [step, setStep] = useState(0);
    const [content, setContent] = useState(onboardingContent[step]);

    function moveToNextStep() {
        setStep(step + 1);
        setContent(onboardingContent[step]);
    }

    return (
        <div>
            {content}
            <Button
                value={`Go to next step`}
                onClick={() => {
                    moveToNextStep();
                }}
            />
        </div>
    );
}
